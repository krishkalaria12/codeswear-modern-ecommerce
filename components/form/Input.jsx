function InputForm({type, placeholder, label,name ,classname, value, onChange, readOnly}) {
  return (
    <>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 dark:text-gray-100 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          value={value}
          onChange={onChange}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={type}
          required
          readOnly={readOnly}
          className={`dark:placeholder:text-gray-400 dark:text-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm p-2 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:bg-gray-800  focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm focus:outline-0 focus:border-0 sm:leading-6 h-10 ${classname}`}
        />
      </div>
    </>
  );
}

export default InputForm;
