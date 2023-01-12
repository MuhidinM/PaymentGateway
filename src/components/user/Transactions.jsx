import React from 'react'

function Transactions() {
  return (
    <>
      <div className="w-5/6 m-8">
        <div className="mt-4 overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Account Holder</th>
                <th>Account</th>
                <th>Bank</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>ME</td>
                <td>1022225648986</td>
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
                <td>1000003656654</td>
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
                <td>1000000646</td>
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
  )
}

export default Transactions