import { IUserParams, IUserResponse } from '../types/IParams';
export const transformerUser = (data: IUserParams | null): IUserResponse => {
    return {
        id: data?.id ?? null,
        username: data?.username ?? '',
        imageUrl: data?.image_url ?? '',
        name: data?.name ?? '',
        createdAt: data?.createdAt ?? null,
        updatedAt: data?.updatedAt ?? null,
    }
} 