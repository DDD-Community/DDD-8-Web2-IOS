import { API_BASE_URL } from "@env";
import axios from "axios";
import { getAccessToken } from "~utils/secure-store";

const httpClient = axios.create({
  baseURL: API_BASE_URL,
});

httpClient.interceptors.request.use(
  async (config) => {
    const accessToken = await getAccessToken();
    console.log(accessToken);
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

export { httpClient };
