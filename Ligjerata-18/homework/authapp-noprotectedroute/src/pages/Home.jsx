import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../slices/LoginButton";
import LogOutButton from "../slices/LogOutButton";
import { Link } from "react-router-dom";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      <div className="flex gap-5">
        <a href="/dashboard" className="bg-green-400 px-5 py-2 rounded-2xl">
          Dashboard
        </a>
        <a href="/profile" className="bg-green-400 px-5 py-2 rounded-2xl">
          User Profile
        </a>
      </div>
      {!isAuthenticated ? (
        <LoginButton />
      ) : (
        <>
          <Link
            to="/dashboard"
            className="px-4 py-2 bg-blue-500 text-white rounded
            hover:bg-blue-600 transition"
          >
            Shko te Dashboard
          </Link>
          <LogOutButton />
        </>
        
      )}
      
    </div>
  );
};

export default Home;
