import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export function createUser(userData) {
  return apiFetch("/signup", { body: userData }).then((u) => {
    const { token, ...user } = u;
    sessionStorage.setItem(tokenKey, token);
    return user;
  });
}