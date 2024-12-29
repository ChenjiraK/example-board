import React, { useState, useMemo } from 'react';
import LogoImg from '../assets/image/logo-login.svg';
import InputText from '../components/Input/InputText.tsx';
import MainButton from '../components/Button/MainButton.tsx';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
   const navigator = useNavigate();
   const [username, setUsername] = useState('');

   const isDisabled = useMemo(() => {
      return Boolean(!username);
   }, [username]);

   function handleSubmit() {
      if(isDisabled) return;
      goToHomePage();
   }
   function goToHomePage() {
      navigator('/');
   }
  return (
      <div className="bg-primary h-screen">
         <div className="sm:flex sm:flex-row-reverse">
            <div className="login-logo login-desktop-logo">
               <img className="w-full max-w-32" src={LogoImg} alt="logo-login" />
               <div className="pt-5 text-white text-24">A Board</div>
            </div>
            <div className="w-full flex justify-center items-center">
               <div className='w-full px-5 sm:max-w-[500px]'>
                  <h1 className="text-white pt-9 sm:pt-0">Sign in</h1>
                  <div className="mt-9">
                     <InputText onChange={setUsername} placeholder="Username" />
                  </div>
                  <div className="mt-4">
                     <MainButton isDisabled={isDisabled} onClick={handleSubmit}>Sign in</MainButton>
                  </div>
               </div>
            </div>
         </div>
      </div>
  )
};

export default Login;

