"use client";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Wait() {
  return (
    <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 bg-white/50 z-50">
      <AiOutlineLoading3Quarters
        className="animate-spin text-[var(--main-button-color)]"
        size="5em"
      />
    </div>
  );
}
