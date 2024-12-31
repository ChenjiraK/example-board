import { IComment } from '../types/IParams';
export const transformerCommentResponse = (data: any): IComment => {
  return {
    id: data.id,
    comment: data.comment ?? '',
    updatedAt: data.updatedAt,
    createdAt: data.createdAt,
    user: data?.user ?? null,
  };
};
export const transformerCommentParams = (params: IComment): IComment => {
  return {
    comment: params?.comment ?? '',
    user: params?.user ? { id: params.user.id } : undefined,
    blog: params?.blog ? { id: params.blog.id } : undefined,
  };
};
