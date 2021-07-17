import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = ["Dashboard", "documents", "Projects"];
const profile = ["Your Profile", "Settings", "Sign out"];

function DashboardNavBar({ url }) {
  return (
    <div className="h-screen md:w-1/4 w-1/12 border-r border-gray-500">
      <Disclosure as="nav" className="h-screen bg-gray-800">
        {({ open }) => (
          <>
            <div className="">
              {/* Mobile menu button */}
              <div
                className={`md:hidden z-10 flex justify-center  ${
                  open ? "relative top-0 right-0 w-44 bg-gray-800" : null
                }`}
              >
                <Disclosure.Button className="h-10 w-10 bg-gray-800 inline-flex items-center justify-center rounded-md text-white hover:bg-gray-700">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="h-96 hidden md:flex flex-col">
                {navigation.map((item, itemIdx) =>
                  itemIdx === 0 ? (
                    <Fragment key={item}>
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <Link
                        key={item}
                        to={`${url}`}
                        className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {item}
                      </Link>
                    </Fragment>
                  ) : (
                    <Link
                      key={item}
                      to={`${url}/${item.toLowerCase()}`}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>

              {/* Mobile menu  */}
              <Disclosure.Panel className="md:hidden z-10 relative -top-px right-0 w-44 h-screen flex flex-col bg-gray-800">
                {navigation.map((item, itemIdx) =>
                  itemIdx === 0 ? (
                    <Fragment key={item}>
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <Link
                        key={item}
                        to={`${url}`}
                        className=" text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {item}
                      </Link>
                    </Fragment>
                  ) : (
                    <Link
                      key={item}
                      to={`${url}/${item.toLowerCase()}`}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item}
                    </Link>
                  )
                )}
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default DashboardNavBar;
