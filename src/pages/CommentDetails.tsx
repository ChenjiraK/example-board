import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainPage from '../components/Input/MainPage.tsx';
import Board from '../components/Board.tsx';
import '../style/custom.scss';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../redux/Store';
import { getBlogById } from '../redux/actions/BlogAction';
import { createComment } from '../redux/actions/CommentAction.ts';
import { transformerCommentParams } from '../transformer/transformerComment';
import { IBlog } from '../types/IParams';

const CommentDetails: React.FC = () => {
  const [blog, setBlog] = useState<IBlog | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const blogState = useSelector((state: RootState) => state.blogs);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getBlogById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (blogState.data.isSuccess && blogState.data.data) {
      setBlog(blogState.data.data);
    }
  }, [blogState]);

  function handleAddComment(value: any) {
    const params = transformerCommentParams({
      comment: value,
      user: { id: 1 },
      blog: { id: id },
    });
    dispatch(createComment(params)).then(() => {
      if (id) {
        dispatch(getBlogById(id));
      }
    });
  }

  return (
    <MainPage>
      <div>
        {blogState.data.loading ? (
          <div className="text-center pt-11">Loading data...</div>
        ) : (
          <div className="bg-white content-detail-height">
            <div className="pt-2 sm:px-14">
              {blog && (
                <Board
                  isShowCommentDefault={true}
                  isShowAddCommentBtn={true}
                  blog={blog}
                  onAddComment={(value) => {
                    handleAddComment(value);
                  }}
                ></Board>
              )}
            </div>
          </div>
        )}
      </div>
    </MainPage>
  );
};
export default CommentDetails;
