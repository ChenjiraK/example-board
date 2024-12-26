import React from "react";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Topbar : React.FC = () => {
   return (
      <div className="fixed z-10 h-72px md:h-60px bg-primary flex items-center justify-between w-full px-6">
         <div className="text-white">A Board</div>
         <div><Icon className="text-white" icon={faBars} /></div>
      </div>
   );
};

export default Topbar;