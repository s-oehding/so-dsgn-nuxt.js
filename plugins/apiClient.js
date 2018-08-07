import axios from '~/plugins/axios'

const ApiClient = {

  async get(endpoint, params) {
    try {
      const response = await axios.get(this.urlBuilder(endpoint), params);
      return this.response
    } catch (error) {
      return error
    }
  },

  urlBuilder (endpoint) {
    return endpoint + '?token=' + process.env.cockpit.apiToken
  }

}

export default ApiClient;
