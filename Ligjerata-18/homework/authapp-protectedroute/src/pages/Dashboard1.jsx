import { useAuth0 } from '@auth0/auth0-react';
import NavBar from '../components/NavBar'
import BackHomeButton from '../slices/BackHomeButton';

const Dashboard = ()=>{
    const {isLoading} = useAuth0();
    
    if(isLoading){
        return <div>Loading...</div>
    }

    return (

        <NavBar />
    )
}
export default Dashboard;