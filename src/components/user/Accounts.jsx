import React from "react";

function Accounts() {
  return (
    <>
      <div className="w-5/6 mt-4">
        <button className="mb-4 btn btn-outline btn-primary">
          <label htmlFor="my-modal-4" className="cursor-pointer">
            {" "}
            Add New
          </label>
        </button>
        <div className="mt-4 overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Account Holder</th>
                <th>Account</th>
                <th>Bank</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>ME</td>
                <td>1022225648986</td>
                <td>CBO</td>
                <td>Verified</td>
                <td>
                  <a href="/users/uapi">Delete</a>
                </td>
              </tr>
              <tr className="hover">
                <th>2</th>
                <td>Hart</td>
                <td>1000003656654</td>
                <td>CBE</td>
                <td>Verified</td>
                <td>
                  <a href="/users/uapi">Delete</a>
                </td>
              </tr>
              <tr>
                <th>3</th>
                <td>Brice</td>
                <td>1000000646</td>
                <td>BOA</td>
                <td>Pending</td>
                <td>
                  <a href="/users/uapi">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Accounts;
