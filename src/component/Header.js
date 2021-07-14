import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { LogoutIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function Header({ handleMySkyLogout }) {
  const [scroll, setScroll] = useState(false);

  const scrollEffect = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= 10 && scroll === false) {
      setScroll(true);
    } else if (scrollPosition < 10 && scroll === true) {
      setScroll(false);
    }
  };

  window.onscroll = scrollEffect;

  return (
    <div className={`sticky top-0 bg-white ${scroll ? "shadow" : null}`}>
      <ul className="px-16 py-4 flex justify-between items-center">
        <li>
          <Link
            to="/"
            className="tracking-widest uppercase font-bold text-xl text-blue-500 hover:text-blue-300"
          >
            Skycolab
          </Link>
        </li>
        <div className="flex justify-between w-8/12">
          <li>
            <Link
              to="/dashboard"
              className="mx-2 uppercase font-bold text-sm text-gray-500 hover:text-gray-700"
            >
              Dashboard
            </Link>
          </li>
          <Menu as="li">
            <Menu.Button className="mx-2 uppercase font-bold text-sm text-gray-500 hover:text-gray-700">
              Profile
            </Menu.Button>

            <Menu.Items className="p-4 shadow rounded flex flex-col absolute z-10 bg-white top-14 right-16">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`p-2 flex rounded text-sm font-bold  ${
                      active ? "bg-blue-500 text-white" : "text-gray-700"
                    }`}
                    href="/"
                  >
                    User ID
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`p-2 flex rounded text-sm font-bold  ${
                      active ? "bg-blue-500 text-white" : "text-gray-700"
                    }`}
                    onClick={handleMySkyLogout}
                  >
                    Log Out
                    <LogoutIcon className="ml-1 w-5 h-5" />
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </ul>
    </div>
  );
}
