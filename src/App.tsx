import React from 'react';
import { ToastContainer } from './components/Alert/Alert.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const App: React.FC = () => {
   return (
      <div id="root" className="font-medium bg-gray-BBC2C0">
         <Router basename="/board">
            <ToastContainer />
            <Routes />
         </Router>
      </div>
   );
};

export default App;
