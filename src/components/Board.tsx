import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faComment,
  faEdit,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons';
import MainOutlineButton from './Button/MainOutlineButton.tsx';
import MainButton from './Button/MainButton.tsx';
import InputTextArea from './Input/InputTextArea.tsx';
import AddCommentModal from './Modals/AddCommentModal.tsx';
import { IBlog, IComment } from '../types/IParams';
import { COMMUNITY_LIST } from '../constants/list';
import { emits } from '../helper/EmitData';

type BoardProps = {
  isShowCommentDefault?: boolean;
  isShowFavorite?: boolean;
  isShowAddCommentBtn?: boolean;
  isShowEdit?: boolean;
  blog: IBlog;
  onAddComment?: (value: string) => void;
  onDelete?: () => void;
  onEdit?: () => void;
};
type CommentProps = {
  item: IComment;
};

const Board: React.FC<BoardProps> = ({
  isShowCommentDefault = false,
  isShowFavorite = false,
  isShowAddCommentBtn = false,
  isShowEdit = false,
  blog,
  onAddComment,
  onDelete,
  onEdit,
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isShowComment, setIsShowComment] = useState<boolean>(false);
  const [comment, setComment] = useState('');
  const [isShowCommentInput, setIsShowCommentInput] = useState<boolean>(false);
  const [isShowCommentModal, setIsShowCommentModal] = useState<boolean>(false);
  const navigator = useNavigate();

  useEffect(() => {
    setIsShowComment(isShowCommentDefault);
  }, [isShowCommentDefault]);

  const isDisabled = useMemo(() => {
    return Boolean(!comment);
  }, [comment]);

  const isHaveComment = useMemo(() => {
    if (blog.comments && blog.comments.length > 0) {
      return true;
    }
    return false;
  }, [blog.comments]);

  const communityText = useMemo(() => {
    const listfilter = COMMUNITY_LIST.find(
      (item: any) => item.value === blog.communityId
    );
    if (listfilter) {
      return listfilter.text;
    }
    return '';
  }, []);

  const CommentsComponent: React.FC<CommentProps> = ({ item }) => {
    return (
      <div className="my-4 px-3">
        <div className="flex">
          <img
            className="w-8 h-8 rounded-full"
            src={item.user?.imageUrl}
            alt="image-profile"
          />
          <p className="self-center text-black px-5">{item.user?.name}</p>
          <p className="self-center text-12 text-gray-300">12 ago</p>
        </div>
        <div className="pt-4 text-12">{item.comment}</div>
      </div>
    );
  };
  function handleCancel() {
    setIsShowCommentInput(false);
    setComment('');
  }
  function onClickPost() {
    setIsShowCommentInput(false);
    setComment('');
    emits(onAddComment, comment);
  }
  function onClickConfirmCommentModal(comment: string) {
    setComment(comment);
    setIsShowCommentModal(false);
    emits(onAddComment, comment);
  }
  function goToDetail() {
    navigator(`/detail/${blog.id}`);
  }
  function onClickAddComment(device: string) {
    if (device === 'mobile') {
      setIsShowCommentModal(true);
    } else {
      setIsShowCommentInput(true);
    }
  }
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="flex">
          <img
            className="w-10 h-10 rounded-full"
            src={blog.user?.imageUrl}
            alt="profile-comment"
          />
          <p className="self-center text-gray-939494 px-5">{blog.user?.name}</p>
        </div>
        {isShowFavorite && (
          <div>
            {isFavorite ? (
              <Icon
                className="text-18 text-yellow-400 cursor-pointer"
                icon={starSolid}
                onClick={() => setIsFavorite(false)}
              />
            ) : (
              <Icon
                className="text-18 text-gray-939494 cursor-pointer"
                icon={faStar}
                onClick={() => setIsFavorite(true)}
              />
            )}
          </div>
        )}
        {isShowEdit && (
          <div className="flex">
            <div>
              <Icon
                className="text-18 text-gray-939494 cursor-pointer px-3"
                icon={faEdit}
                onClick={onEdit}
              />
            </div>
            <div>
              <Icon
                className="text-18 text-gray-939494 cursor-pointer"
                icon={faTrashAlt}
                onClick={onDelete}
              />
            </div>
          </div>
        )}
      </div>
      <div onClick={goToDetail}>
        {communityText && (
          <div className="bg-gray-F3F3F3 text-gray-4A4A4A rounded-3xl w-fit py-1 px-3 my-3 text-14">
            {communityText}
          </div>
        )}

        <h3 className="text-black">{blog.title}</h3>
        <p className="text-black pt-2">{blog.content}</p>
      </div>
      {isHaveComment && (
        <div
          className="text-gray-939494 flex mt-5 cursor-pointer"
          onClick={() => setIsShowComment(!isShowComment)}
        >
          <Icon className="text-16" icon={faComment} />
          <span className="pl-1 text-12">{blog.comments?.length} comments</span>
        </div>
      )}
      {!isShowCommentInput && isShowAddCommentBtn && (
        <>
          <div className="w-36 my-5">
            <div className="block sm:hidden">
              <MainOutlineButton onClick={() => onClickAddComment('mobile')}>
                Add comments
              </MainOutlineButton>
            </div>
            <div className="hidden sm:block">
              <MainOutlineButton onClick={() => onClickAddComment('desktop')}>
                Add comments
              </MainOutlineButton>
            </div>
          </div>
        </>
      )}
      {isShowCommentInput && (
        <div className="hidden sm:block my-5">
          <InputTextArea onChange={setComment} />
          <div className="flex justify-end space-x-2 mt-1">
            <div className="w-32">
              <MainOutlineButton onClick={handleCancel}>
                Cancel
              </MainOutlineButton>
            </div>
            <div className="w-32">
              <MainButton isDisabled={isDisabled} onClick={onClickPost}>
                Post
              </MainButton>
            </div>
          </div>
        </div>
      )}
      {isShowComment && (
        <div>
          {blog.comments?.map((item, i) => (
            <div key={`comment_${blog.id}_${i}`}>
              <CommentsComponent item={item} />
            </div>
          ))}
        </div>
      )}

      <AddCommentModal
        isOpen={isShowCommentModal}
        onConfirm={(value) => onClickConfirmCommentModal(value)}
        onCancel={() => setIsShowCommentModal(false)}
      />
    </div>
  );
};

export default Board;
