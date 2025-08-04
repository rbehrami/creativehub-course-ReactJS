import { useAuth0 } from '@auth0/auth0-react';
import BackHomeButton from '../slices/BackHomeButton';
const Profile = () => {
    const { user, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <img src={user.picture} alt={user.name} />
            <h2 className='font-bold'>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
};

export default Profile;