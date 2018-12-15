
import axios from "axios";

const AxiosService = {
    
    baseUrl: "https://conduit.productionready.io/api/",

    post(resource, body, token) {
        return axios.post(this.baseUrl + resource,
            body,
            token != null ? { headers: {Authorization: 'Token '+token} } : {}
        );
    },

    get(resource, token) {
        return axios.get(
            this.baseUrl + resource,
            token != null ? { headers: {Authorization: 'Token '+token} } : {}
        );
    }

}

export default AxiosService;