export type IBlogsParams = {
    text: string;
    value: string | number | null
};
export type IBlogResponse = {
    id: number | null,
    communityId?: number | null
    title?: string | null
    content?: string | null
    updatedAt?: Date | string | null
    createdAt?: Date | string | null
    user?: IUserResponse | null
    user_id?: number | null,
    comments?: ICommentResponse[] | []
}
export type IBlogParams = {
    id?: number | null,
    community_id?: number | null
    title?: string | null
    content?: string | null
    updatedAt?: Date | string | null
    createdAt?: Date | string | null
    user?: IUserParams | null
    user_id?: number | null
    comments?: ICommentParams[] | []
}

export type IUserParams = {
    id: number | null
    username: string,
    image_url?: string | null,
    name?: string | null,
    createdAt:Date | string | null,
    updatedAt: Date | string | null
}
export type IUserResponse = {
    id?: number | null
    username?: string,
    imageUrl?: string,
    name?: string,
    createdAt?:Date | string | null,
    updatedAt?: Date | string | null
}

export type ICommentResponse = {
    id: number | null,
    comment: string | null,
    user?: IUserResponse | null,
    createdAt: Date | string | null,
    updatedAt: Date | string | null,
}
export type ICommentParams = {
    id: number | null,
    user_id?: number | null,
    blog_id?: number | null,
    comment?: string | null
    user?: IUserParams | null,
    createdAt: Date | string | null,
    updatedAt: Date | string | null,
}