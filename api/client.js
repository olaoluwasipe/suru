// import client from "../api/client";
import axios from 'axios';

const client = axios.create({
  baseURL: "http://192.168.43.240:1025/api"
})


export default client;