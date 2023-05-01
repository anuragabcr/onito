import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`/api/user`);
    const json = await response.json();
    const data: [] = json.users;
    setUsers([...data]);
  };
  return (
    <section className=" py-1 bg-blueGray-50">
      <div className="w-full lg:w-10/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">ONITO</h6>
              <Link
                href="/"
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Home
              </Link>
            </div>
          </div>
          <div className="relative overflow-x-auto" style={{ padding: 10 }}>
            <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Sex</th>
                  <th>Mobile</th>
                  <th>Address</th>
                  <th>Govt Id Type</th>
                  <th>Govt Id Num</th>
                  <th>Guardian Name</th>
                  <th>Nationality</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0
                  ? users.map((user) => (
                      <tr
                        key={user.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td>{user.name}</td>
                        <td>{user.dob}</td>
                        <td>{user.sex}</td>
                        <td>{user.phone}</td>
                        <td>{user.address}</td>
                        <td>{user.idType}</td>
                        <td>{user.idNum}</td>
                        <td>{user.gName}</td>
                        <td>{user.nationality}</td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
