import React from "react";

function ButtonForm({ field, className, onClick, disabled = false }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 ${className} ${disabled ? "bg-pink-300 hover:bg-pink-300" : "bg-pink-600 hover:bg-pink-500"}`}
    >
      {field}
    </button>
  );
}

export default ButtonForm;
