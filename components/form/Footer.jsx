import Link from "next/link";

function FormFooter({member, action, link}) {
  return (
    <>
      <p className="mt-10 dark:text-gray-400 text-center text-sm text-gray-500">
        {member}?{" "}
        <Link
          href={`/${link}`}
          className="font-semibold leading-6 text-pink-600 hover:text-pink-500 dark:text-pink-500 dark:hover:text-pink-600"
        >
          {action}
        </Link>
      </p>
    </>
  );
}

export default FormFooter;
