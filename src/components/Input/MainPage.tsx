import React, { ReactNode, useState } from "react";
import Sidebar from '../Sidebar.tsx'; 
import Topbar from '../Topbar.tsx';

type MainPageProps = {
   children: ReactNode;
};
const MainPage: React.FC<MainPageProps> = ({ children }) => {
   const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

   return (
      <div>
         <Topbar onClickShowMenu={() => setIsShowMenu(true)} />
         <div className='flex pt-20'>
            <div className="sm:w-1/5">
               <Sidebar isShowMenu={isShowMenu} onClickMenu={(value) => setIsShowMenu(value)} />
            </div>
            <div className='main-height w-full'>
               {children}
            </div>
         </div>
      </div>
   );
};

export default MainPage;
