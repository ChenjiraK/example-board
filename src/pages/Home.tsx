import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Board from '../components/Board.tsx'
import MainPage from '../components/Input/MainPage.tsx';
import SearchInput from '../components/Input/SearchInput.tsx';
import MenuDropdown from '../components/Input/MenuDropdown.tsx';
import MainButton from '../components/Button/MainButton.tsx';
import CreatePostModal from '../components/Modals/CreatePostModal.tsx';
import "../style/custom.scss";

const Home: React.FC = () => {
   const navigator = useNavigate();
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   const pages = [{},{},{},{}];
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
   function goToDetail(id: number){
      navigator(`/detail/${id}`)
   }
   function handleConfirm() {
      console.log('confirm');
      setIsModalOpen(false);
    }
   function handleCancel() {
      console.log('cancel');
      setIsModalOpen(false);
   }
   function showModalCreatePost() {
      setIsModalOpen(true);
   }
   return (
      <MainPage>
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
                  <MainButton onClick={() => showModalCreatePost()}>Create +</MainButton>
               </div>
            </div>
            <div className='bg-white rounded-lg mt-4 content-height'>
               <div className=''>
                  {pages.map((_, i) => (
                     <div key={`home_page_${i}`} className='border-b cursor-pointer' onClick={() => goToDetail(i)}>
                        <Board isShowFavorite={true}></Board>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <CreatePostModal
            isOpen={isModalOpen}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
         />
      </MainPage>
   );
};

export default Home;
