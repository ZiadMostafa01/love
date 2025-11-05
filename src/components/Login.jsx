import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpg"

function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "rody") {
      navigate("/intro");
    } else {
      setError("كلمة السر غير صحيحة ⚠️");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white p-10 rounded-xl shadow-xl flex flex-col gap-5 w-[450px]"
    >
      <img src={logo} className="rounded-2xl" alt="" />

      <h2 className="text-2xl font-bold text-center text-[#a94562]">
        Enter the secret word
      </h2>
      <input
        type="password"
        placeholder="Enter Our Secret"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded-md px-4 py-2 focus:outline-none focus:border-[#ff6b81]"
      />
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <button
        type="submit"
        className="bg-[#ff6b81] text-white py-2 rounded-md hover:bg-[#e65a70] transition duration-300"
      >
        Enter
      </button>
    </form>
  );
}

export default Login;
