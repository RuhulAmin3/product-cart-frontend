import { useEffect } from "react";
import toast from "react-hot-toast";

type ApiResponse<T, Error> = {
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
  data: T | undefined | null;
  error: Error | any;
};

const useToastAndApiHandler = <T, Error>(
  response: ApiResponse<T, Error>,
  successMessage: string
) => {
  useEffect(() => {
    if (response.isSuccess && response.data) {
      toast.success(successMessage);
    } else if (response.isError && response.error) {
      toast.error(response?.error?.data?.errorMessages[0]?.message);
    }
  }, [
    response.isSuccess,
    response.isError,
    response.data,
    response.error,
    successMessage,
  ]);
};

export default useToastAndApiHandler;
