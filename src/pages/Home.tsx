import React, { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Board from '../components/Board.tsx';
import MainPage from '../components/Input/MainPage.tsx';
import SearchInput from '../components/Input/SearchInput.tsx';
import MenuDropdown from '../components/Input/MenuDropdown.tsx';
import MainButton from '../components/Button/MainButton.tsx';
import CreatePostModal from '../components/Modals/CreatePostModal.tsx';
import ConfirmDeleteModel from '../components/Modals/ConfirmDeleteModal.tsx';
import '../style/custom.scss';
import { COMMUNITY_LIST } from '../constants/list';
import { IBlog } from '../types/IParams';
import { IDropdownItem } from '../types/Interface';
import { transformerBlogParams } from '../transformer/transformerBlog';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../redux/Store';
import {
  getBlogs,
  updateBlog,
  createBlog,
  deleteBlog,
} from '../redux/actions/BlogAction';

const OurBlog: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const blogState = useSelector((state: RootState) => state.blogs);
  const [blogs, setBlogsData] = useState<IBlog[]>([]);
  const [blog, setBlogItem] = useState<IBlog | null>();
  const [titlePostModal, setTitlePostModal] = useState<string>('Create Post');
  const [community, setCommunity] = useState<IDropdownItem | null>(null);
  const [isModalCreateOpen, setIsModalPostOpen] = useState<boolean>(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState<boolean>(false);
  const communityList = COMMUNITY_LIST;
  function handleConfirmPostModal(value: any) {
    const id = value.id as number;
    const params = transformerBlogParams(value);
    if (isEdit) {
      dispatch(updateBlog(id, params));
    } else {
      dispatch(
        createBlog({
          ...params,
          user: { id: 1 }, //mock user_id from login
        })
      );
    }
  }
  function handleConfirmDeleteModal() {
    setIsModalDeleteOpen(false);
    if (blog && blog.id) {
      dispatch(deleteBlog(blog.id));
    }
  }
  function showModalCreatePost() {
    setTitlePostModal('Create Post');
    setBlogItem(null);
    setIsModalPostOpen(true);
  }
  function onClickEditBlog(itemBlog: IBlog) {
    setBlogItem(itemBlog);
    setTitlePostModal('Edit Post');
    setIsModalPostOpen(true);
  }
  function onClickDeleteBlog(itemBlog: IBlog) {
    setIsModalDeleteOpen(true);
    setBlogItem(itemBlog);
  }
  const isEdit = useMemo(() => {
    if (titlePostModal.includes('Edit')) {
      return true;
    }
    return false;
  }, [titlePostModal]);

  /** get data */
  useEffect(() => {
    dispatch(
      getBlogs({
        user_id: 1,
      })
    );
  }, [dispatch]);

  /** mapping data from action api */
  useEffect(() => {
    if (blogState.list.isSuccess && blogState.list.data) {
      setBlogsData(blogState.list.data);
    }
  }, [blogState]);
  //after create or update success
  useEffect(() => {
    if (
      blogState.create.isSuccess ||
      blogState.update.isSuccess ||
      blogState.delete.isSuccess
    ) {
      setIsModalPostOpen(false);
      dispatch(getBlogs({ user_id: 1 }));
    }
  }, [blogState.create, blogState.update, blogState.delete.isSuccess]);
  return (
    <MainPage>
      <div className="w-main-page px-6">
        <div className="flex justify-between items-center w-full">
          <div className="flex-grow w-full max-w-[500px]">
            <SearchInput />
          </div>
          <div className="mx-4">
            <MenuDropdown
              dropdownList={communityList}
              onChangeItem={(item: IDropdownItem) => setCommunity(item)}
              onClickDropdown={() => {}}
            >
              <div className="flex">
                <p className="pr-3">
                  {community ? community.text : 'Community'}
                </p>
                <Icon className="self-center text-12" icon={faChevronDown} />
              </div>
            </MenuDropdown>
          </div>
          <div>
            <MainButton onClick={() => showModalCreatePost()}>
              Create +
            </MainButton>
          </div>
        </div>
        {blogState.list.loading ? (
          <div className="text-center text-white pt-11">Loading data...</div>
        ) : (
          <>
            <div className="bg-white rounded-lg mt-4 content-height">
              <div className="">
                {blogs.map((item, i) => (
                  <div
                    key={`home_page_${i}`}
                    className="border-b cursor-pointer"
                  >
                    <Board
                      isShowFavorite={true}
                      blog={item}
                      onDelete={() => onClickDeleteBlog(item)}
                      onEdit={() => onClickEditBlog(item)}
                    ></Board>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <CreatePostModal
        isOpen={isModalCreateOpen}
        formData={blog}
        titleHeader={titlePostModal}
        onConfirm={(value: any) => handleConfirmPostModal(value)}
        onCancel={() => setIsModalPostOpen(false)}
      />
      <ConfirmDeleteModel
        isOpen={isModalDeleteOpen}
        title="Please confirm if you wish to delete the post"
        message="Are you sure you want to delete the post? Once deleted, it cannot be recovered."
        onConfirm={handleConfirmDeleteModal}
        onCancel={() => setIsModalDeleteOpen(false)}
      />
    </MainPage>
  );
};

export default OurBlog;
