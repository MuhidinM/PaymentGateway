import React from "react";

function Nav() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Api</a>
              </li>
            </ul>
          </div>
          <a href="/users" className="text-xl normal-case btn btn-ghost">
            <img src="./Payment Gateway3.png" alt="" className="w-24" />
          </a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <a href="/users">Home</a>
            </li>
            <li>
              <a href="/users/transactions">Transactions</a>
            </li>
            <li>
              <a href="/users/accounts">Accounts</a>
            </li>
            <li>
              <a href="/users/uapi">Api</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <span className="pt-4 pl-4">Merchant id: 77679399</span>
                <div className="divider"></div>
                <li>
                  <a>
                    Profile
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
