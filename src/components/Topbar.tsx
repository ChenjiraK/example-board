import React from "react";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MainButton from "./Button/MainButton";
type TopbarProps = {
   onClickShowMenu?: () => void;
};

const Topbar : React.FC<TopbarProps> = ({ onClickShowMenu }) => {
   return (
      <div className="fixed z-10 h-72px sm:h-60px bg-primary flex items-center justify-between w-full px-6">
         <div className="text-white">A Board</div>
         <button className="block sm:hidden cursor-pointer" onClick={onClickShowMenu}>
            <Icon className="text-white" icon={faBars} />
         </button>
         <div className="hidden sm:block"><MainButton onClick={() => {}}>Sign In</MainButton></div>
      </div>
   );
};

export default Topbar;