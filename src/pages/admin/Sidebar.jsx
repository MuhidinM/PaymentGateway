import React from "react";

function Sidebar() {
  return (
    <>
      <div className="shadow-md drawer-side">
        <label htmlhtmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="p-4 menu w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <a href="/admin" className="text-xl normal-case btn btn-ghost">
            <img src="./Payment Gateway3.png" alt="" className="w-24" />
          </a>
          <li>
            <div>
              <svg
                className="w-6 h-6 text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="12" cy="13" r="2" />{" "}
                <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />{" "}
                <path d="M6.4 20a9 9 0 1 1 11.2 0Z" />
              </svg>
              <a href="/admin">Dashboard</a>
            </div>
          </li>
          <li>
            <div>
              <svg
                className="w-6 h-6 text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <rect x="3" y="15" width="6" height="6" rx="2" />{" "}
                <rect x="15" y="15" width="6" height="6" rx="2" />{" "}
                <rect x="9" y="3" width="6" height="6" rx="2" />{" "}
                <path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" />{" "}
                <line x1="12" y1="9" x2="12" y2="12" />
              </svg>
              <a href="/admin/sites">Sites</a>
            </div>
          </li>
          <li>
            <div>
              <svg
                className="w-6 h-6 text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />{" "}
                <path d="M7 11V7a5 5 0 0 1 9.9-1" />
              </svg>
              <a href="/admin/activate">Activate</a>
            </div>
          </li>
          <li>
            <div>
              <svg
                className="w-6 h-6 text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="3" y1="21" x2="21" y2="21" />{" "}
                <line x1="3" y1="10" x2="21" y2="10" />{" "}
                <polyline points="5 6 12 3 19 6" />{" "}
                <line x1="4" y1="10" x2="4" y2="21" />{" "}
                <line x1="20" y1="10" x2="20" y2="21" />{" "}
                <line x1="8" y1="14" x2="8" y2="17" />{" "}
                <line x1="12" y1="14" x2="12" y2="17" />{" "}
                <line x1="16" y1="14" x2="16" y2="17" />
              </svg>
              <a href="/admin/banks">Bank</a>
            </div>
          </li>
          <li>
            <div>
              <svg
                className="w-6 h-6 text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />{" "}
                <line x1="8" y1="9" x2="16" y2="9" />{" "}
                <line x1="8" y1="13" x2="14" y2="13" />
              </svg>
              <a href="/admin/messages">
                {" "}
                Messages <div className="text-white badge badge-info">3</div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
