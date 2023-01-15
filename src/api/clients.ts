import { API_BASE_URL } from "@env";
import axios from "axios";
import { getAccessToken } from "~utils/secure-store";

const authedClient = axios.create({
  baseURL: API_BASE_URL,
});

authedClient.interceptors.request.use(
  async (config) => {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      // TODO Implements
      throw new Error("No access token");
    }

    return {
      ...config,
      headers: {
        ...config?.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    } as any;
  },
  (error) => error
);

export { authedClient };
