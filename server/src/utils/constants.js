export const STATUS_CODES = Object.freeze({
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
});

export const poll = {
  question: "Vote for one of the best leader",
  options: [
    {
      id: 1,
      text: "John",
      votes: [],
    },
    {
      id: 2,
      text: "Alice",
      votes: [],
    },
    {
      id: 3,
      text: "Bob",
      votes: [],
    },
    {
      id: 4,
      text: "Emma",
      votes: [],
    },
    {
      id: 5,
      text: "Michael",
      votes: [],
    },
  ],
};
