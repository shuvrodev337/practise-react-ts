// import React from 'react';

import { ChangeEvent, useState } from "react";

const UseStateFormExample = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
  };
  const handleUser = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setUser({ ...user, [inputName]: inputValue });
  };
  return (
    <div className="my-6 space-y-4">
      <h1 className="text-4xl">User Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          className="border  rounded-lg p-2"
          onChange={handleUser}
        />
        <input
          type="text"
          name="email"
          className="border rounded-lg p-2"
          onChange={handleUser}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-400 rounded-lg text-white"
        >
          Submit User
        </button>
      </form>
    </div>
  );
};

export default UseStateFormExample;
