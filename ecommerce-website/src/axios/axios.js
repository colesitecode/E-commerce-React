import axios from 'axios'

const instance = axios.create({
  // the api (cloud function) url
  baseURL: 'http://localhost:5001/ecommerce-project-561b9/us-central1/api'
});

export default instance;