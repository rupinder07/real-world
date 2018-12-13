
import axios from "axios";

const AxiosService = {
    
    baseUrl: "https://conduit.productionready.io/api/",

    post(resource, body) {
        return axios.post(this.baseUrl + resource, body);
    }

}

export default AxiosService;