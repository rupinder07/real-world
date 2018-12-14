
import axios from "axios";

const AxiosService = {
    
    baseUrl: "https://conduit.productionready.io/api/",

    post(resource, body) {
        return axios.post(this.baseUrl + resource, body);
    },

    get(resource) {
        return axios.get(this.baseUrl + resource);
    }

}

export default AxiosService;