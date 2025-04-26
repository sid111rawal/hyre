import React, { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Worker");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!name || !email || !username || !password || !role) {
      setError("Please fill in all fields.");
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, username, password, role }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        window.location.href = "/login";
      } else {
        const data = await response.json();
        setError(data.error || "Signup failed.");
      }
    } catch (err) {
      setError("Signup failed.");
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <div className="text-white text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome!</h1>
        <h2 className="text-gray-400">Sign up to Kindle3D.</h2>
      </div>
      <div className="w-80">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">          
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-800 text-white px-4 py-2 rounded" required />
          <input type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-800 text-white px-4 py-2 rounded" required/>
          <input type="text" placeholder="Your Username" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-gray-800 text-white px-4 py-2 rounded" required />
          <input type="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-800 text-white px-4 py-2 rounded" required minLength={6}/>
          <select value={role} onChange={(e) => setRole(e.target.value)} className="bg-gray-800 text-white px-4 py-2 rounded">
              <option value="Worker">Worker</option>
              <option value="Employer">Employer</option>
          </select>
          <button type="submit" className="bg-gray-800 text-white font-bold px-4 py-2 rounded">Sign up</button>
          {error && <p className="text-red-500">{error}</p>}
          <div className="text-gray-400 text-center">Already have an account? <Link href="/login" className="text-white underline">Log in</Link></div>
        </form>
      </div>
    </div>
  );
};
