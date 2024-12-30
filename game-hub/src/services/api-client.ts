import axios from "axios";

const FINAL_API_KEY = process.env.VITE_APP_RAWG_API_KEY;


export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: FINAL_API_KEY
  },
});
export interface FetchResponse<T> {
  count: number;
  results: T[];
}