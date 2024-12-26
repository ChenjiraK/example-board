import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faHome, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Sidebar : React.FC = () => {
   return (
      <div className="w-1/4 hidden md:block mx-6">
         <Link to="/" className="block w-max py-2 text-gray-700 font-semibold hover:text-green-600">
            <Icon icon={faHome} />
            <span className="pl-3">Home</span>
         </Link>
         <Link to="/" className="block w-max py-2 text-gray-700 font-semibold hover:text-green-600">
            <Icon icon={faPenToSquare} />
            <span className="pl-3">Our Blog</span>
         </Link>
      </div>
   );
};

export default Sidebar;