"use client";
import { useState } from "react";

const Trigger = () => {
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    throw new Error("Something went wrong");
  }
  return (
    <div className='mt-12'>
      <button
        onClick={() => {
          setClicked(true);
        }}
        className='rounded-lg border border-gray-300 px-5 py-4 hover:border-white hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
        Trigger Error 👍
      </button>
    </div>
  );
};

export default Trigger;
