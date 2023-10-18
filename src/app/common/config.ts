const isDev = process.env.NODE_ENV === "development";
const BASE_URL = isDev ? "http://localhost:3000" : "";
const CATEGORIES_ENDPOINT = `https://multi-select-filter-zg34.vercel.app/api/categories`;

export { CATEGORIES_ENDPOINT };
