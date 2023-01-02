
import { APIPath } from "utility/constant/apiPath";
import { BaseService } from "./baseService";

class Login {
  login = (data) => {
    return BaseService.post(APIPath.login, data);
  };
  logout = () => {
    return BaseService.get(APIPath.logout);
  };
}

const LoginService = new Login();
Object.freeze(LoginService);
export { LoginService };