import { IBlog, IComment } from '../types/IParams';
import { transformerCommentResponse } from './transformerComment';
import { transformerUserResponse } from './tranformerUser';

export const transformerBlogResponse = (data: any): IBlog => {
  const comments = data?.comments ?? [];
  return {
    id: data?.id,
    communityId: data?.communityId ?? null,
    title: data?.title ?? '',
    content: data?.content ?? '',
    user: data?.user ? transformerUserResponse(data.user) : null,
    comments: comments.map((item: IComment) =>
      transformerCommentResponse(item)
    ),
    updatedAt: data?.updatedAt,
    createdAt: data?.createdAt,
  };
};
export const transformerBlogParams = (params: IBlog) => {
  return {
    communityId: params?.communityId ?? null,
    title: params?.title ?? '',
    content: params?.content ?? '',
    user: params?.user ? { id: params.user.id } : undefined,
  };
};
