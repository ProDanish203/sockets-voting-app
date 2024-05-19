import { BarChart } from "lucide-react";
import React from "react";

export const Header = () => {
  return (
    <header className="bg-background text-white py-5 px-4 flex items-center justify-center">
      <div className="text-2xl font-bold flex items-center gap-x-2">
        <BarChart strokeWidth={4} />
        Voting App
      </div>
    </header>
  );
};
