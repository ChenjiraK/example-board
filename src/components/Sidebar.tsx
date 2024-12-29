import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faHome, faPenToSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { emits } from '../helper/EmitData';

type MainButtonProps = {
   isShowMenu?: boolean;
   onClickMenu?: (value: boolean) => void;
};

const Sidebar: React.FC<MainButtonProps> = ({ isShowMenu = false, onClickMenu}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

   useEffect(() => {
      setIsOpen(isShowMenu)
   }, [isShowMenu]);

   function setIsShowMenu(status:boolean) {
      setIsOpen(status)
      emits(onClickMenu, status)
   }

   const RightSidebar = () => {
      return (
         <div className="relative">
            <div
               className={`fixed z-20 top-0 right-0 h-full bg-primary rounded-l-lg text-white w-64 transform transition-transform duration-300 ${
                  isOpen ? 'translate-x-0' : 'translate-x-full'
               }`}
            >
               <div className="pl-7">
                  <button className="text-lg font-bold py-5 cursor-pointer" onClick={() => setIsShowMenu(!isOpen)}>
                     <Icon icon={faArrowRight} />
                  </button>
                  <Link
                     to="/"
                     onClick={() => setIsShowMenu(false)}
                     className="block w-max py-2 text-white font-semibold hover:text-success">
                        <Icon icon={faHome} />
                        <span className="pl-3">Home</span>
                  </Link>
                  <Link
                     to="/"
                     onClick={() => setIsShowMenu(false)}
                     className="block w-max py-2 text-white font-semibold hover:text-success">
                        <Icon icon={faPenToSquare} />
                        <span className="pl-3">Our Blog</span>
                  </Link>
               </div>
            </div>
            {isOpen && (
            <div
               className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
               onClick={() => setIsShowMenu(false)}
            ></div>
         )}
         </div>
      );
   }
   return (
      <>
         <div className="hidden sm:block mx-6">
            <Link
               to="/"
               className="block w-max py-2 text-gray-700 font-semibold hover:text-success">
                  <Icon icon={faHome} />
                  <span className="pl-3">Home</span>
            </Link>
            <Link
               to="/"
               className="block w-max py-2 text-gray-700 font-semibold hover:text-success">
                  <Icon icon={faPenToSquare} />
                  <span className="pl-3">Our Blog</span>
            </Link>
         </div>
         <div className='sm:hidden'>
            <RightSidebar />
         </div>
      </>
   );
};

export default Sidebar;
