import { useAuth0 } from "@auth0/auth0-react";
import LogOutButton from "./LogOutButton";

const SideBar = ()=>{
    const {user} = useAuth0();

    return (
        <>
    <aside>
         <div className="mb-8 ">
            <img src={user.picture} alt="" className="w-26 h-26 border-2 border-gray-300"/>
            <p>{user.name}</p>
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
                <h2 className="text-xs uppercase tracking-wider text-indigo-400 mb-2"><LogOutButton /></h2>
            </div>
        </div>
    </aside>

        </>
    )
}
export default SideBar;