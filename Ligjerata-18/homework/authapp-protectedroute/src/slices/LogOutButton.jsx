import {useAuth0} from '@auth0/auth0-react'

const LogOutButton = ()=>{
    const {logout} = useAuth0();

    return(
        <button onClick={()=>logout({logoutParams: {returnTo: window.location.origin}})} className="block p-2 cursor-pointer hover:bg-red-900 rounded transition font-semibold text-[18px]">
            LogOut
        </button>
    )
}
export default LogOutButton;