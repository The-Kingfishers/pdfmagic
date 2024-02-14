"use client"
import Pagination from "@/app/components/ui/dashboard/Pagination/Pagination";
import Search from "@/app/components/ui/dashboard/Search/Search";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import loading from "../../../../../public/loading.json";
import useUsers from "@/hooks/useUsers";

const UsersPage = () => {
  const [users, isLoading, isError, error] = useUsers();
  if (isLoading) {
    return (
      <div className="w-1/2 flex mx-auto">
        <Lottie animationData={loading}></Lottie>
      </div>
    );
  }
  if (isError) {
    console.log(error);
  }
  return (
    <div className="w-full pt-5 bg-customDarkBlue text-white">
      <div className="flex justify-between items-center mx-5">
        <Search placeholder="Search for a User..." />
        <Link href="/dashboard/users/add">
          <button className="btn border-none bg-customOrange text-white font-medium">
            Add New
          </button>
        </Link>
      </div>

      <table className="w-full mx-5 mt-5">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        {users.map((user) => (
  <tr key={user._id}>
    <td className="flex items-center mt-1">
      <Image
        className="rounded-full object-cover"
        src="/account_circle_FILL0_wght400_GRAD0_opsz24.svg"
        width={40}
        height={40}
        alt="UserImg"
      />
      {user.name}
    </td>
    <td>{user.email}</td>
    <td>12.02.2024</td>
    <td>Admin</td>
    <td>
      <select className="text-black" name="role" id="role">
        <option value="normal">Change Role</option>
        <option value="user">User</option>
        <option value="moderator">Moderator</option>
        <option value="admin">Admin</option>
      </select>
      <button className="btn border-none bg-red-600 text-white font-medium">
        Delete
      </button>
    </td>
  </tr>
))}

        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersPage;
