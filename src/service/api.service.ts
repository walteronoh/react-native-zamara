import RNSmtpMailer from "react-native-smtp-mailer";
import { ApiServiceReturnTypes, LoginEndpointDataTypes, LoginTypes, StaffInputsTypes } from "../components/types/types";

export default class ApiService {
    AuthApi = "https://dummyjson.com/auth/login";
    UserListApi = "https://dummyjson.com/users";
    StaffApi = "https://crudcrud.com/api/";
    SmtpApi = "https://www.smtpbucket.com/";
    ContinentsApi = "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL";
    StaffResourceToken = "7b094cb6c58d4ee78be95501de5ed675"
    StaffApiUrl = this.StaffApi + this.StaffResourceToken + "/zamara";

    async loginApiService(body: LoginTypes): Promise<ApiServiceReturnTypes> {
        return fetch(this.AuthApi, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then((response) => {
            if (response.status == 200) {
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

    async continentsApiService() { }

    async fetchStaffApiService() {
        return fetch(this.StaffApiUrl, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => {
            if(response.status == 200) {
                return {
                    isValid: true,
                    message: "Staff Successfully Fetched"
                };
            }
            return {
                isValid: false,
                message: response.statusText
            };
        }).catch((e) => {
            return {
                isValid: false,
                message: "Seems Like There Was An Error Fetching Staff. Please Try Again Later."
            };
        });
    }

    async addStaffApiService(body: StaffInputsTypes): Promise<ApiServiceReturnTypes> {
        return fetch(this.StaffApiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then((response) => {
            if(response.status == 201) {
                return {
                    isValid: true,
                    message: "Staff Successfully Created"
                };
            }
            console.log(response);
            return {
                isValid: false,
                message: response.statusText
            };
        }).catch((e) => {
            return {
                isValid: false,
                message: "Seems Like There Was An Error Saving Staff. Please Try Again Later."
            };
        });
    }

    async updateStaffApiService(body: StaffInputsTypes) {
        return fetch(this.StaffApiUrl + "/" + body.id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then((response) => {
            if(response.status == 200) {
                return {
                    isValid: true,
                    message: "Staff Details Successfully Updated."
                };
            }
            return {
                isValid: false,
                message: response.statusText
            };
        }).catch((e) => {
            return {
                isValid: false,
                message: "Seems Like There Was An Error Updating Staff Details. Please Try Again Later."
            };
        });
    }

    async deleteStaffApiService(id: number) {
        return fetch(this.StaffApiUrl + "/" + id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => {
            if(response.status == 200) {
                return {
                    isValid: true,
                    message: "Staff Details Successfully Deleted."
                };
            }
            return {
                isValid: false,
                message: response.statusText
            };
        }).catch((e) => {
            return {
                isValid: false,
                message: "Seems Like There Was An Error Deleting Staff Details. Please Try Again Later."
            };
        });
    }

    async sendEmailService() {
        await RNSmtpMailer.sendMail({
            mailhost: "mail.smtpbucket.com",
            port: "8025",
            ssl: true,
            username: "",
            password: "",
            recipients: "walterkiprono81@gmail.com",
            subject: "Testing Smtp Client",
            htmlBody: "<p>Smtp Client</p>",
        }).then((res) => {
            console.log(res);
        }).catch((e) => {
            console.log(e)
        });
    }
}