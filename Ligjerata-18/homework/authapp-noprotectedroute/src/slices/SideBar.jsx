import LogOutButton from "./LogOutButton";

const SideBar = ()=>{

    return (
        <>
            <aside>
         <div className="mb-8">
            <h1 className="text-2xl font-bold">Admin One</h1>
        </div> 
        <div className="text-left">
            <div className="mb-6">
                <h2 className="text-xs uppercase tracking-wider text-indigo-400 mb-2">GENERAL</h2>
                <a href="#" className="block py-2 px-3 rounded bg-indigo-700">Dashboard</a>
            </div> 
            <div className="mb-6">
                <h2 className="text-xs uppercase tracking-wider text-indigo-400 mb-2">EXAMPLES</h2>
                <div className="space-y-1">
                    <a href="#" className="block py-2 px-3 rounded hover:bg-indigo-700">users</a>
                </div>
            </div>
            <div>
                <h2 className="text-xs uppercase tracking-wider text-indigo-400 mb-2">
                    <LogOutButton />
                </h2>
            </div>
        </div>
        </aside>

        </>
    )
}
export default SideBar;