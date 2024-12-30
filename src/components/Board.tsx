import React, { useState, useEffect, useMemo } from 'react';
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

type BoardProps = {
  isShowCommentDefault?: boolean;
  isShowFavorite?: boolean;
  isShowAddCommentBtn?: boolean;
  isShowEdit?: boolean;
  onClickAddComment?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
};

const Board: React.FC<BoardProps> = ({
  isShowCommentDefault = false,
  isShowFavorite = false,
  isShowAddCommentBtn = false,
  isShowEdit = false,
  onClickAddComment,
  onDelete,
  onEdit,
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isShowComment, setIsShowComment] = useState<boolean>(false);
  const [comment, setComment] = useState('');
  const [isShowCommentInput, setIsShowCommentInput] = useState<boolean>(false);

  useEffect(() => {
    setIsShowComment(isShowCommentDefault);
  }, [isShowCommentDefault]);

  const isDisabled = useMemo(() => {
    return Boolean(!comment);
  }, [comment]);

  const CommentsComponent = () => {
    return (
      <div className="my-4 px-3">
        <div className="flex">
          <img
            className="w-8 h-8 rounded-full"
            src={'https://picsum.photos/200'}
            alt="image-profile"
          />
          <p className="self-center text-black px-5">firstname</p>
          <p className="text-12 text-gray-300">12 ago</p>
        </div>
        <div className="pt-4 text-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum
          obcaecati voluptate odit nulla recusandae iusto magnam doloribus
          cumque quasi facere esse enim, placeat inventore cupiditate voluptas.
          Incidunt placeat modi exercitationem nobis facere magnam! Sint,
          maxime? Rem numquam ipsam aliquam dolores, voluptatum expedita
          architecto at voluptatem non reiciendis, dolor quia.
        </div>
      </div>
    );
  };
  function handleAddComment() {
    setIsShowCommentInput(true);
  }
  function handleCancel() {
    setIsShowCommentInput(false);
    setComment('');
  }
  function handleSubmit() {
    setIsShowCommentInput(false);
    setComment('');
  }
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="flex">
          <img
            className="w-10 h-10 rounded-full"
            src={'https://picsum.photos/200'}
            alt="profile-comment"
          />
          <p className="self-center text-gray-939494 px-5">firstname</p>
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
      <div className="bg-gray-F3F3F3 text-gray-4A4A4A rounded-3xl w-fit py-1 px-3 my-3 text-14">
        History
      </div>
      <h3 className="text-black">Lorem ipsum dolor sit amet.</h3>
      <p className="text-black pt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum commodi
        aut vel quia sint facere dignissimos ipsam optio sit? Omnis.
      </p>
      <div
        className="text-gray-939494 flex mt-5 cursor-pointer"
        onClick={() => setIsShowComment(!isShowComment)}
      >
        <Icon className="text-16" icon={faComment} />
        <span className="pl-1 text-12">32 comments</span>
      </div>
      {!isShowCommentInput && isShowAddCommentBtn && (
        <>
          <div className="w-36 my-5">
            <div className="block sm:hidden">
              <MainOutlineButton onClick={onClickAddComment}>
                Add comments
              </MainOutlineButton>
            </div>
            <div className="hidden sm:block">
              <MainOutlineButton onClick={handleAddComment}>
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
              <MainButton isDisabled={isDisabled} onClick={handleSubmit}>
                Post
              </MainButton>
            </div>
          </div>
        </div>
      )}
      {isShowComment && (
        <div>
          <CommentsComponent />
          <CommentsComponent />
          <CommentsComponent />
          <CommentsComponent />
        </div>
      )}
    </div>
  );
};

export default Board;
