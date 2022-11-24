import axios, { Method } from "axios"
import env from "../enviornment"

class NetworkService {

    async call({ method, url, params, data, headers }: { method: Method, url: string, params?: any, data?: object, headers?: any }) {
        try {

            const res = await axios({ method, url, params, data, headers });

            return res;
        } catch (err: any) {
            if (err.response?.status === 403) {
                return "INVALID_ACCESS";
            }
            return err;
        }
    }
    async callBackendEndpoint({ method, endpoint, params, data, headers }: { method: Method, endpoint: string, params?: any, data?: object, headers?: any }) {
        return await this.call({ method, url: `${env.BACKEND_BASE_URL}/${endpoint}`, params, data, headers });
       /// return await this.call({ method, url: `https://hodo-mint.buildmydapp.co/${endpoint}`, params, data, headers });
    }

}

export default NetworkService;