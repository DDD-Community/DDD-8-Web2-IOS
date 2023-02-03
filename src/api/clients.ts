import { API_BASE_URL } from "@env";
import axios, { isAxiosError } from "axios";
import { getAccessToken } from "~utils/secure-store";

const httpClient = axios.create({
  baseURL: API_BASE_URL,
});

httpClient.interceptors.request.use(
  async (config) => {
    const accessToken = await getAccessToken();
    console.log("accessToken: ", accessToken);
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

httpClient.interceptors.response.use(
  (res) => {
    console.log(res.data);
    return res;
  },
  (err) => {
    console.error(err);
    if (isAxiosError(err)) {
      console.error(err.message);
      console.error(err.response?.data);
    }

    return Promise.reject(err);
  }
);

export { httpClient };
