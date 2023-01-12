import React from "react";

function Nav() {
  return (
    <>
      <div className="shadow-md navbar bg-base-100">
        <div className="flex-1"></div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="" alt="Profile" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <span className="pt-4 pl-4">Merchant id: 77679399</span>
              <div className="divider"></div>
              <li>
                <a href="/users/profile" className="justify-between">
                  Profile{" "}
                </a>
              </li>
              <li>
                <a href="/users/setting">Settings</a>
              </li>
              <li>
                <a href="/">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
