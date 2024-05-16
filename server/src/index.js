import { Server } from "socket.io";
import http from "http";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { poll } from "./utils/constants.js";

const app = express();
const server = http.createServer(app);

const corsOptions = {
  credentials: true,
  origin:
    process.env.NODE_ENV === "production"
      ? "http://localhost:3000"
      : "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "16kb" }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Boilerplate API",
  });
});

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  },
});

io.use(addUser);

function addUser(socket, next) {
  const user = socket.handshake.auth.token;
  if (user) {
    try {
      socket.data = { ...socket.data, user };
    } catch (err) {}
  }
  next();
}

io.on("connection", (socket) => {
  console.log("A user connected", socket.data.user);

  socket.on("updateState", () => {
    console.log("client asked for state update");
    socket.emit("updateState", poll);
  });

  socket.on("vote", (optionId) => {
    poll.options.forEach((option) => {
      option.votes = option.votes.filter((user) => user !== socket.data.user);
    });

    const option = poll.options.find((o) => o.id === optionId);
    if (!option) return;
    option.votes.push(socket.data.user);
    io.emit("updateState", poll);
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is listening live on port:${port}`);
});
