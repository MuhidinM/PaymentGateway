import React from "react";

function Uapi() {
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
                <th>Name</th>
                <th>Api key</th>
                <th>Account</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Default</td>
                <td>Qjnalfjvndljnv3094889mdkco983</td>
                <td>CBO</td>
                <td>
                  <a href="/users/uapi">Copy</a>
                </td>
                <td>
                  <a href="/users/uapi">Delete</a>
                </td>
              </tr>
              <tr className="hover">
                <th>2</th>
                <td>Hart</td>
                <td>ij894ujn498jn48hg84n484n84nbn</td>
                <td>CBE</td>
                <td>
                  <a href="/users/uapi">Copy</a>
                </td>
                <td>
                  <a href="/users/uapi">Delete</a>
                </td>
              </tr>
              <tr>
                <th>3</th>
                <td>Brice</td>
                <td>ahvoprmmrko0004kmtk033m9555tg</td>
                <td>BOA</td>
                <td>
                  <a href="/users/uapi">Copy</a>
                </td>
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

export default Uapi;
