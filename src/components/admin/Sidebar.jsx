import React from "react";

function Sidebar() {
  return (
    <>
      <div className="shadow-md drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="p-4 menu w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <div>
              <svg
                class="h-6 w-6 text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                class="h-6 w-6 text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                class="h-6 w-6 text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                class="h-6 w-6 text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
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
          <div className="divider"></div>
          <li>
            <div>
              <svg
                class="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <a href="/intro">Docs</a>
            </div>
          </li>
          <li>
            <div>
              <svg
                class="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                />
              </svg>
              <a href="/apidocs">API's</a>
            </div>
          </li>
          <li>
            <div>
              <svg
                class="h-6 w-6 text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="12" cy="12" r="9" />{" "}
                <line x1="12" y1="17" x2="12" y2="17.01" />{" "}
                <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
              </svg>
              <a href="/contact">Help</a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
