import SideBar from '../slices/SideBar';

const NavBar = () => {

    return (
        <>
<div className="flex top h-screen bg-gray-100">
  {/* Sidebar */}
    <div className="w-64 bg-[#1F2937] text-white p-4">
   
        <SideBar />
    </div>

  {/* Main Content */}
  <div className="flex-1 overflow-auto">
    {/* Top Bar */}
    <header className="bg-white shadow p-4">
      <div className="flex justify-between items-center">
        <div className="relative w-64">
          <input 
            type="text" 
            placeholder="Search everywhere..." 
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img src="/user-avatar.jpg" alt="User" className="w-8 h-8 rounded-full mr-2" />
            <span>John Doe</span>
          </div>
        </div>
      </div>
    </header>

    {/* admin section */}
    <div className='flex flex-row justify-between'>
        <div className='p-6'>
            <h2 className="text-2xl text-gray-600">Admin / <span className='font-bold text-black'>Dashboard</span></h2>
        </div>

    </div>

    {/* Dashboard Content */}
    <main>
      <h1 className="text-2xl font-bold mb-6 bg-white px-6 py-8">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 px-5">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Clients</h3>
          <p className="text-3xl font-bold">512</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Sales</h3>
          <p className="text-3xl font-bold">$7,770</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Performance</h3>
          <p className="text-3xl font-bold">256%</p>
        </div>
      </div>
    </main>
  </div>
</div>
        </>
    )
}
export default NavBar;  