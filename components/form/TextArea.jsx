import React from 'react'

function TextArea({placeholder, label, value, onChange}) {
    return (
        <div className="relative">
            <label htmlFor="message" className="block text-sm font-medium leading-6 dark:text-gray-100 mb-2 text-gray-900">{label}</label>
            <textarea id="message" value={value}
            onChange={onChange} placeholder={placeholder} name="message" className="w-full py-1.5 bg-gray-100 dark:bg-gray-800 dark:bg-opacity-40 bg-opacity-50 rounded border border-gray-300 dark:border-gray-700 focus:border-pink-500 focus:bg-white dark:focus:bg-transparent focus:ring-2 focus:ring-pink-200 dark:focus:ring-pink-900 h-32 text-base outline-none dark:text-gray-100 text-gray-700 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
    )
}

export default TextArea