import axios from "axios";

const BASE_URL = "https://api.github.com/users/"

// https://api.github.com/users/LTykhonovska
export const fetchUserInfoFromGit = async (userName) => {
  const requestUrl = `${BASE_URL}${userName}`
  const resp = await axios.get(requestUrl);
  return resp.data;
}