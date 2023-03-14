import { LoginApiServiceReturnTypes, LoginEndpointDataTypes, LoginTypes } from "../components/types/types";

export default class ApiService {
    AuthApi = "https://dummyjson.com/docs/auth";
    UserListApi = "https://dummyjson.com/users";
    StaffApi = "https://crudcrud.com/api/f27ed3aa99ac4a77aa70f137155aad88";
    SmtpApi = "https://www.smtpbucket.com/";
    ContinentsApi = "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL";

    async loginApiService(body: LoginTypes): Promise<LoginApiServiceReturnTypes> {
        return fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: body.username,
                password: body.password
            })
        }).then((response) => {
            if(response.status == 200) {
                const r = response.json();
                return {
                    isValid: true,
                    message: "User Login Successful"
                };
            }
            return {
                isValid: false,
                message: response.statusText
            };
        }).catch((e) => {
            return {
                isValid: false,
                message: "It Seems Like There Was An Error. Please Try Again Later.",
            };
        });
    }
}