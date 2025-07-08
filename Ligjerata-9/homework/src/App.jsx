
import './App.css';
import {LoginForm } from './components/BasicLoginForm'
import { RegisterForm } from './components/RegistrationForm';
import {RegistrationFormwithHook} from './components/RegistrationForm'
import {RegisterFormWithLoop} from './components/RegistrationForm'
import { UserData } from './components/UserData';
import {CollectingData} from './components/CollectingDataForm'


function App() {

  return (
    <>
      <div>
        <LoginForm />
        <RegisterForm />
        <RegistrationFormwithHook />
        <RegisterFormWithLoop />
        <UserData />
        <CollectingData />
      </div>
    </>
  )

}

export default App
