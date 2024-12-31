import { ICommentParams, ICommentResponse } from "../types/IParams"
import { transformerUser } from "./transformerUser"
export const transformerComment = (data: ICommentParams): ICommentResponse => {
    return {
        id: data.id,
        comment: data.comment ?? null,
        user: transformerUser(data.user ?? null),
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
    }
} 