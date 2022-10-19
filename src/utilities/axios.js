import axios from "axios";

// 60081c23da82b394d27f582582156332

const instance = axios.create({ baseURL: "https://api.themoviedb.org/3" });

export default instance;
