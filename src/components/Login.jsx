import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "rody") {
      navigate("/intro");
    } else {
      setError(<h1 className="sm:text-lg font-bold">🎨 غلط ركزي شوية يا فنانة</h1>);
    }
  };

  return (
    <div className="relative p-[3px] rounded-2xl animate-border">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-xl shadow-xl flex flex-col gap-5 w-[325px] sm:w-[450px]"
      >
        <div className="text-center font-timer text-xl sm:text-3xl font-bold text-red-500">
          ❤️Stay With me in 2026❤️
        </div>
        <img src={logo} className="rounded-2xl" alt="" />

        <h2 className="text-3xl sm:text-4xl font-love text-center text-[#a94562]">
          Enter the secret word
        </h2>
        <input
          type="text"
          placeholder="Enter Our Secret"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-md px-4 py-2 focus:outline-none focus:border-[#ff6b81] transition duration-300"
        />
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button
          type="submit"
          className="bg-[#ff6b81] cursor-pointer text-xl font-love text-white py-2 rounded-md hover:bg-[#e65a70] transition duration-300"
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
