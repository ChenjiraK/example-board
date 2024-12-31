import { IBlogParams, IBlogResponse, ICommentParams } from "../types/IParams"
import { transformerUser } from "./transformerUser"
import { transformerComment } from "./transformerComment"

export const transformerBlog = (data: IBlogParams): IBlogResponse => {
    const comments = data.comments?.map((item:ICommentParams) => transformerComment(item)) ?? []
    return {
        id: data?.id ? data.id as number : 0,
        communityId: data.community_id,
        title: data.title,
        content: data.content,
        updatedAt: data?.updatedAt ?? null,
        createdAt: data?.createdAt ?? null,
        user: transformerUser(data?.user ?? null),
        comments: comments,
    }
} 

export const transformerBlogParams = (data:IBlogResponse): IBlogParams => {
    return {
        community_id: data?.communityId,
        title: data.title,
        content: data.content,
        user_id: data.user_id,
    }
}