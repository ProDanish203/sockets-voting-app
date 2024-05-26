import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="text-center py-4">
      <p>
        Made with <span className="text-red-500">❤</span> by{" "}
        <Link
          href="https://danish-siddiqui.vercel.app/"
          className="underline font-semibold"
        >
          Danish Siddiqui
        </Link>
      </p>
    </footer>
  );
};
