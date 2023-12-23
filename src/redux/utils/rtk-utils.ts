/* eslint-disable @typescript-eslint/no-explicit-any */
import { setIntoLocalStorage } from "../../utils";

export const onQueryStartedCommon = async (
  _arg: never,
  { queryFulfilled }: any
): Promise<void> => {
  try {
    const { data } = await queryFulfilled;
    setIntoLocalStorage("accessToken", data.data.accessToken);
  } catch (error) {
    // Handle the error appropriately
  }
};
