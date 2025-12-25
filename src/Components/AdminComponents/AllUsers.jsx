import React, { useContext, useState, useEffect } from "react";
import { AUTHContextAPI } from "../../Context/AuthContext";

const AllUsers = () => {
  const { allUsers } = useContext(AUTHContextAPI);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(allUsers || []);

  // Effect to update the filtered list whenever allUsers or searchTerm changes
  useEffect(() => {
    if (!allUsers) {
      setFilteredUsers([]);
      return;
    }

    const filtered = allUsers.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filtered);
  }, [allUsers, searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="w-screen py-10 px-6 bg-gray-50 min-h-screen">
      <article className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 border-b pb-3">
            All Users
          </h1>
          <div className="mt-4">
            Search by username:{" "}
            <input
              type="text"
              placeholder="Search"
              className="border-2 p-1 ml-1"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </header>

        <main className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-amber-100 text-left text-gray-700 uppercase text-sm">
                <th className="py-3 px-4 border-b border-gray-300">ID</th>
                <th className="py-3 px-4 border-b border-gray-300">Name</th>
                <th className="py-3 px-4 border-b border-gray-300">Role</th>
                <th className="py-3 px-4 border-b border-gray-300">Email</th>
                <th className="py-3 px-4 border-b border-gray-300">Image</th>
                <th className="py-3 px-4 border-b border-gray-300">Update</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user, ind) => (
                <tr
                  key={user.id ?? ind}
                  className="hover:bg-amber-50 transition-colors border-b border-gray-200"
                >
                  <td className="py-3 px-4 text-gray-700">{user.id}</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">
                    {user.username}
                  </td>
                  <td
                    className={`py-3 px-4 text-gray-700 ${
                      user.role === "admin" ? " text-red-600 font-semibold rounded-md m-2 py-2" : ""
                    }`}
                  >
                    {user.role}
                  </td>

                  <td className="py-3 px-4 text-gray-700">{user.email}</td>
                  <td className="py-3 px-4">
                    <img
                      src={user.userImage}
                      alt={user.username}
                      className="h-16 w-16 rounded-full object-cover border border-gray-300"
                    />
                  </td>
                  <td className="py-3 px-4"> <button className="py-3 px-4 bg-red-500 text-white border rounded-md hover:bg-red-950 cursor-pointer">delete</button></td>
                </tr>
              ))}
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="6" className="py-4 text-center text-gray-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </main>
      </article>
    </section>
  );
};

export default AllUsers;
