import { IUser } from "../types/IParams"
export const transformerUserResponse = (data: any):IUser => {
    return {
        id: data.id,
        username: data.username,
        name: data.name ?? '',
        imageUrl: data.imageUrl ?? '',
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
    }
}
export const transformerUserParams = (params: IUser) => {
    return {
        username: params.username ?? '',
        name: params.name ?? '',
        imageUrl: params.imageUrl ?? '',
    }
}
