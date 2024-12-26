import React from 'react';
import { ToastContainer } from './components/Alert/Alert.tsx';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './routes';
import Sidebar from './components/Sidebar.tsx'; 
import Topbar from './components/Topbar.tsx';

const App: React.FC = () => {
   return (
      <div id="root" className="font-medium bg-gray-BBC2C0">
         <Router basename="/board">
            <ToastContainer />
            <Topbar />
            <div className='flex pt-20'>
               <div className='w-1/4'>
                  <Sidebar></Sidebar>
               </div>
               <div className='main-height'>
                  <Routes />
               </div>
            </div>
         </Router>
      </div>
   );
};

export default App;
