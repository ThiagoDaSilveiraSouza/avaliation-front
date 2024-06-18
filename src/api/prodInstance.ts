import axios from "axios";

export const prodInstance = axios.create({
  baseURL: "",
});
