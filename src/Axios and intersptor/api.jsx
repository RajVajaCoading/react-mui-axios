import { Block } from "@mui/icons-material";
import axios from "axios";
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });


  // Add a request interceptor
  api.interceptors.request.use(function (config) {
    // Do something before request is sent
    // Object.assign(config.headers,{test:"1234"})
    // console.log(config)
    document.getElementById("overlay").style.display="block";
    console.log("req")
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // Object.assign(response,{test:"1234"})
    // Object.assign(response,{data:{raj:response.data,message:"hello react"}})

    // console.log(response)
    document.getElementById("overlay").style.display="none";

    console.log("res")

    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default api


// loader website
//   https://projects.lukehaas.me/css-loaders/