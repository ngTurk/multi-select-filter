const isDev = process.env.NODE_ENV === "development";
const BASE_URL = isDev ? "http://localhost:3000" : "";
const CATEGORIES_ENDPOINT = `${BASE_URL}/api/categories`;

export { CATEGORIES_ENDPOINT };