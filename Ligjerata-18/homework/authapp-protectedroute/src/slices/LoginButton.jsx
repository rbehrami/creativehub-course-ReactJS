import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className="bg-blue-600 
  px-10 py-3 rounded-2xl text-white font-bold cursor-pointer">
    Log In
  </button>;
};

export default LoginButton;