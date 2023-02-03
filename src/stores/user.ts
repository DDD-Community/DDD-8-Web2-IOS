import { selector } from "recoil";
import { fetchUserName } from "~api";

export const userQuery = selector({
  key: "fetchUser",
  get: async () => {
    const data = await fetchUserName();
    return {
      data,
    };
  },
});
