import axios from "axios";

const api = axios.create({
  baseURL:
    "https://apicofee.limofood.ir/api/v1/product/get_category_all_with_branch",
  headers: {
    "Content-Type": "application/json",
  },
});
