import axios from "axios";

axios.defaults.headers.common['X-Auth-Token'] = `${process.env.REACT_APP_API_TOKEN}`
axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}v${process.env.REACT_APP_API_URL_VERSION}/`

export default axios;