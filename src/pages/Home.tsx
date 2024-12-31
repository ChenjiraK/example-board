import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Board from '../components/Board.tsx'
import MainPage from '../components/Input/MainPage.tsx';
import SearchInput from '../components/Input/SearchInput.tsx';
import MenuDropdown from '../components/Input/MenuDropdown.tsx';
import MainButton from '../components/Button/MainButton.tsx';
import CreatePostModal from '../components/Modals/CreatePostModal.tsx';
import "../style/custom.scss";
import { COMMUNITY_LIST } from '../constants/list';
import { IBlog } from '../types/IParams';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../redux/Store';
import { getBlogs } from '../redux/actions/BlogAction';

const Home: React.FC = () => {
   const dispatch: AppDispatch = useDispatch();
   const blogState = useSelector((state: RootState) => state.blogs);

   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   const [blogs, setBlogsData] = useState<IBlog[]>([]);
   const communityList = COMMUNITY_LIST;
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
   /** get data */
   useEffect(() => {
      dispatch(getBlogs()); 
   }, [dispatch]);

   /** mapping data from action api */
   useEffect(() => {
      if (blogState.list.isSuccess && blogState.list.data) {
         setBlogsData(blogState.list.data);
      }
   }, [blogState]);
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
            {
               blogState.list.loading ? <div className='text-center text-white pt-11'>Loading data...</div> 
               : <>
                  <div className='bg-white rounded-lg mt-4 content-height'>
                     <div className=''>
                        {blogs.map((item, i) => (
                           <div key={`home_page_${i}`} className='border-b cursor-pointer'>
                              <Board isShowFavorite={true} blog={item}></Board>
                           </div>
                        ))}
                     </div>
                  </div>
               </>
            }
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
