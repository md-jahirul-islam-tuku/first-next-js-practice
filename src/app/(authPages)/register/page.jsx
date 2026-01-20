"use client";
import registerUser from "@/app/actions/auth/registerUser";
import React from "react";

export default function RegisterPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const payLoad = { username, email, password };
    registerUser(payLoad);
    e.target.reset();
  };
  return (
    <div className="mt-20">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border p-2 rounded-lg"
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 rounded-lg"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="border p-2 rounded-lg mt-2"
          required
        />
        <br />
        <input
          type="submit"
          value="Register"
          className="border p-2 rounded-lg mt-4 px-10 cursor-pointer"
        />
      </form>
    </div>
  );
}
