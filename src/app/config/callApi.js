import axios from "axios";
/**
 * @async
 * @func callApi
 * @param {String} url
 * @param {String} accessToken
 * @return {Promise}
 */
const callApi = async (url, accessToken) => {
  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return axios.get(url, headers);
};
export default callApi;
