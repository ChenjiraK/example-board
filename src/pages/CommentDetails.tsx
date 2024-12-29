import React, { useState } from 'react';
import MainPage from '../components/Input/MainPage.tsx';
import Board from '../components/Board.tsx';
import AddCommentModal from '../components/Modals/AddCommentModal.tsx';
import '../style/custom.scss';

const CommentDetails: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleConfirm() {
    console.log('confirm');
    setIsModalOpen(false);
  }
  function handleCancel() {
    console.log('cancel');
    setIsModalOpen(false);
  }
  function onClickAddComment() {
    console.log('onclick comment');
    setIsModalOpen(true);
  }
  return (
    <MainPage>
      <div>
        <div className="bg-white content-detail-height">
          <div className="pt-2 sm:px-14">
            <Board
              isShowCommentDefault={true}
              isShowAddCommentBtn={true}
              onClickAddComment={onClickAddComment}
            ></Board>
          </div>
        </div>
      </div>
      <AddCommentModal
        isOpen={isModalOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </MainPage>
  );
};
export default CommentDetails;
