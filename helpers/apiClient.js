require('dotenv').config()
import axios from 'axios'

const ApiClient={

  async get(endpoint, params) {
    try {
      const response = await axios.get(this.urlBuilder(endpoint), params);
      return response
    } catch (error) {
      return error
    }
  },

  urlBuilder (endpoint) {
    return process.env.API_URL + endpoint + '?token=' + process.env.API_TOKEN
  }

}

export default ApiClient;
