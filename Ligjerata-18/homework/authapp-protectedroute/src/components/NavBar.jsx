import { useAuth0 } from "@auth0/auth0-react";
import LogOutButton from "../slices/LogOutButton";

function NavBar() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Horizontal navbar */}
      <header className="fixed top-0 left-64 right-0 h-18 bg-white shadow-lg rounded-t-lg flex items-center justify-between px-6 z-10">
        <div>
          <input 
            type="text" 
            placeholder="type to search" 
            className="border border-gray-300 px-5 py-2 text-black rounded-sm w-64" 
            aria-label="Search"
          />
        </div>
        <div>
          {user?.picture && (
            <img 
              src={user.picture} 
              alt="User profile" 
              className="w-14 h-14 rounded-full border-2 border-gray-300"
              referrerPolicy="no-referrer"
            />
          )}
        </div>
      </header>
      <div className="flex flex-1 pt-18">
        {/* Vertical sidebar */}
        <aside className="fixed top-0 left-0 h-screen w-64 bg-[#1e1b4b] text-white p-4 z-20">
          <ul className="space-y-10">
            <div className="text-center flex flex-col items-center justify-center">
              {user?.picture && (
                <img 
                  src={user.picture} 
                  alt="User" 
                  className="w-36 h-36 mb-2 border-2 border-white"
                  referrerPolicy="no-referrer"
                />
              )}
              <h3 className="text-white font-bold text-xl truncate max-w-full px-2">
                {user?.name || 'User'}
              </h3>
            </div>
            <li className="mb-0">
              <a href="#" className="block p-2 hover:bg-purple-900 rounded transition font-bold text-[18px]">Dashboard</a>
            </li>
            <li className="mb-0">
              <a href="#" className="block p-2 hover:bg-purple-900 rounded transition font-semibold text-[18px]">Users</a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-purple-900 rounded transition font-semibold text-[18px]">Reports</a>
            </li>
            {isAuthenticated && (
              <li>
                <LogOutButton />
              </li>
            )}
          </ul>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 bg-gray-100 ml-64">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-red-500 p-8 rounded-lg shadow font-bold text-[clamp(16px,4vw,22px)]">Users</div>
            <div className="bg-blue-500 p-8 rounded-lg shadow font-bold text-[clamp(16px,4vw,22px)]">Statistics</div>
            <div className="bg-green-500 p-8 rounded-lg shadow font-bold text-[clamp(16px,4vw,22px)]">Reports</div>
            <div className="bg-orange-500 p-8 rounded-lg shadow font-bold text-[clamp(16px,4vw,22px)]">Settings</div>
          </div>
        </main>
      </div>
      <footer className="fixed bottom-0 left-64 right-0 bg-white shadow-lg h-18">
        <div className="flex flex-row items-center justify-center">
          Creative Course React JS 2025
        </div>
      </footer>
    </div>
  );
}

export default NavBar;