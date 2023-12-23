export type IUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type IAuthResponse = {
  user: IUser | null;
  token: string;
};

export type GenericResponseType<T> = {
  success: boolean;
  message: string;
  statusCode: number;
  data: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
    prevPage: number | null;
    nextpage: number | null;
    totalPages: number | null;
  };
};

export type IGenericErrMessage = {
  path: string | number;
  message: string;
};

export type IGenericErrorResponse = {
  name: string;
  statusCode: number;
  message: string;
  errorMessages: IGenericErrMessage[];
};

export type JWTDecodeDataType = {
  userId: string;
  email: string;
};
