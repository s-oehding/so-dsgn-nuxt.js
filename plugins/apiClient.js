import axios from '~/plugins/axios'

const ApiClient = {

  async get(endpoint, params) {
    try {
      const response = await axios.get(this.urlBuilder(endpoint), params);
      //console.log('ApiClient response: ', response)
      return response.data
    } catch (error) {
      return error
    }
  },

  urlBuilder (endpoint) {
    return endpoint + '?token=' + process.env.cockpit.apiToken
  }

}

export default ApiClient;
