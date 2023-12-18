"use client";

import Input from "@/utils/Input";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState(null);

  console.log(username);

  return (
    <main className="bg-gray-900 font-Poppins flex  h-screen items-center justify-center">
      <Input
        type="text"
        placeholder="Enter your username"
        initialValue={setUsername}
        value={username}
        id="username"
        label="Username"
        className="flex flex-col gap-1"
        labelClass="text-white"
        inputClass="px-5 py-2"
        asterisk={true}
      />
    </main>
  );
};

export default App;
