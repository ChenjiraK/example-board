import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Board from '../components/Board.tsx'
import SearchInput from '../components/Input/SearchInput.tsx';
import MenuDropdown from '../components/Input/MenuDropdown.tsx';
import MainButton from '../components/Button/MainButton.tsx';
import "../style/custom.scss";

const Home: React.FC = () => {
   const communityList = [
      {
         text: 'History',
         value: 'history',
      },
      {
         text: 'Food',
         value: 'food',
      },
      {
         text: 'Pets',
         value: 'pets',
      },
      {
         text: 'Health',
         value: 'health',
      },
      {
         text: 'Fashion',
         value: 'fashion',
      },
      {
         text: 'Exercise',
         value: 'exercise',
      },
      {
         text: 'Others',
         value: 'others',
      }
   ]
   return (
      <div className='w-main-page px-6'>
         <div className='flex items-center'>
            <div className='flex-grow'>
               <SearchInput />
            </div>
            <div className='mx-4'>
               <MenuDropdown 
                  dropdownList={communityList} 
                  onChangeItem={(item:any) => console.log(item)}
                  onClickDropdown={(item:any) => console.log(item)}
               >
                  <div className='flex'>
                     <p className='pr-3'>Community</p>
                     <Icon className='self-center text-12' icon={faChevronDown} />
                  </div>
               </MenuDropdown>
            </div>
            <div>
               <MainButton onClick={() => {}}>Create +</MainButton>
            </div>
         </div>
         <div className='bg-white rounded-t-lg mt-4 content-height'>
            <div className=''>
               <div className='border-b'>
                  <Board></Board>
               </div>
               <div className='border-b'>
                  <Board></Board>
               </div>
               <div className='border-b'>
                  <Board></Board>
               </div>
               <div className='border-b'>
                  <Board></Board>
               </div>
            </div>
         </div>
         
      </div>
   );
};

export default Home;
