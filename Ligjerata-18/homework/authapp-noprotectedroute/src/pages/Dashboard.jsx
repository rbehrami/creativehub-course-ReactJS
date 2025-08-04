import { useAuth0 } from '@auth0/auth0-react';
import NavBar from '../components/NavBar'
import BackHomeButton from '../slices/BackHomeButton';

const Dashboard = ()=>{
    const {isAuthenticated, isLoading} = useAuth0();
    
    if(isLoading){
        return <div>Loading...</div>
    }
    if(!isAuthenticated){
        return <div className='container mx-auto min-h-screen flex flex-col items-center justify-center text-center'>
                <h2 className='text-red-700 text-2xl mb-4'>Kujdes!</h2>
                <p className='text-red-300 text-xl w-122 text-center'>
                    Qasja në faqen Dashboard kërkon hyrje me kredenciale të vlefshme. Ju lutemi, identifikohuni për të vazhduar.
                </p>
                <div className='mt-6'>
                    <BackHomeButton />
                </div>
               </div>
    }
    return (

        <NavBar />
    )
}
export default Dashboard;