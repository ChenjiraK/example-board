export type IBlog = {
  id?: number | string | null;
  communityId?: number | null;
  title?: string | null;
  content?: string | null;
  isFavorite?: boolean | null;
  updatedAt?: Date | string | null;
  createdAt?: Date | string | null;
  user?: IUser | null;
  comments?: IComment[] | [];
};

export type IUser = {
  id?: number | null;
  username?: string;
  imageUrl?: string;
  name?: string;
  createdAt?: Date | string | null;
  updatedAt?: Date | string | null;
};

export type IComment = {
  id?: number | null;
  comment?: string | null;
  blog?: IBlog | null;
  user?: IUser | null;
  createdAt?: Date | string | null;
  updatedAt?: Date | string | null;
};
