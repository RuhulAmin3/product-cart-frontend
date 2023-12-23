import { jwtDecode } from "jwt-decode";
import { JWTDecodeDataType } from "../types";

export const setIntoLocalStorage = (
  key: string,
  value: Record<string, any>
) => {
  if (!key || typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getFromLocalStorage = (key: string): string | null => {
  if (!key || typeof window !== "undefined") {
    const token = localStorage.getItem(key);
    return token;
  }
  return null;
};

export const isLoggin = (key: string) => {
  const authToken = getFromLocalStorage(key);
  return !!authToken;
};

export const removeFromLocalStorage = (key: string): void => {
  if (!key || typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export const getUserInfo = (): JWTDecodeDataType | undefined => {
  const token = getFromLocalStorage("accessToken");
  if (token) {
    const decodedData = jwtDecode(token);
    return decodedData as JWTDecodeDataType;
  }
};
