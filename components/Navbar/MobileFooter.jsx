import Link from "next/link";
import ThemeButton from "../ThemeButton";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toggleTheme } from "@/redux/features/themeSlice";

const MobileFooter = ({ toggleCart, isDropDown, status, handleLoggedInDropdown, handleLogout, ItemCount }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleUserIconClick = () => {
    if (status) {
      handleLoggedInDropdown();
    } else {
      router.push("/login");
    }
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <div className="md:hidden z-50 flex fixed p-2 bottom-0 left-0 right-0 w-full bg-[#111827] text-[#DB2777]">
        <div className="flex justify-around w-full font-bold">
          <Link href={"/"}>
            <HomeIcon className="text-[#bd1e59]" />
          </Link>
          <div className="flex-shrink-0 mr-4 cursor-pointer relative">
            <ShoppingCartIcon
              onClick={toggleCart}
              className="text-[#DB2777] hover:text-[#9B104E] h-8 w-8 dark:text-[#DB2777] dark:hover:text-[#9B104E]"
            />
            <span className="absolute top-0 right-0 bg-[#DB2777] text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
              {ItemCount}
            </span>
          </div>
          <ThemeButton onClick={handleToggleTheme} className="text-[#bd1e59]" />
          <div className="relative inline-block" onClick={handleUserIconClick}>
            <UserIcon className="text-[#bd1e59] cursor-pointer" />
            {status && isDropDown && (
              <div className="absolute top-[-8rem] left-[-3rem] w-32 p-2 bg-white border border-gray-300 rounded shadow">
                <ul>
                  <Link href={"/myaccount"}>
                    <li className="py-1 dark:text-pink-600 cursor-pointer text-pink-500 font-bold">
                      My Account
                    </li>
                  </Link>
                  <Link href={"/myorders"}>
                    <li className="py-1 dark:text-pink-600 cursor-pointer text-pink-500 font-bold">
                      Orders
                    </li>
                  </Link>
                  <li
                    onClick={handleLogout}
                    className="py-1 dark:text-pink-600 cursor-pointer font-bold text-pink-500"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFooter;

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
