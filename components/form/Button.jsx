import React from "react";

function ButtonForm({field}) {
  return (
    <div>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
      >
        {field}
      </button>
    </div>
  );
}

export default ButtonForm;
