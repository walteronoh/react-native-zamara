import { ApiServiceReturnTypes, ContinentTypes, LoginEndpointDataTypes, LoginTypes, StaffInputsTypes } from "../components/types/types";
import { XMLParser } from "fast-xml-parser";
import Session from "./session.service";
const session = new Session();

export default class ApiService {
    AuthApi = "https://dummyjson.com/auth/login";
    UserListApi = "https://dummyjson.com/users";
    StaffApi = "https://crudcrud.com/api/";
    SmtpApi = "https://www.smtpbucket.com/";
    ContinentsApi = "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfContinentsByName";
    StaffResourceToken = "58cddc6145ab4b7885721d74387fa0d6" //"7b094cb6c58d4ee78be95501de5ed675"
    StaffApiUrl = this.StaffApi + this.StaffResourceToken + "/zamara";
    MailerUrl = "https://nodejs-mailsending.vercel.app/v1/text-mail";

    async loginApiService(body: LoginTypes): Promise<ApiServiceReturnTypes> {
        return fetch(this.AuthApi, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then(async (response) => {
            if (response.status == 200) {
                const res = await response.text();
                const r = JSON.parse(res);
                await session.setSession(r.firstName, r.lastName, r.email, r.gender);
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

    async continentsApiService(): Promise<ContinentTypes[]|[]> {
        const parser = new XMLParser();
        return fetch(this.ContinentsApi).then((response) => response.text()).then((response) => {
            let p = parser.parse(response);
            let continents: Array<ContinentTypes> = p.ArrayOftContinent.tContinent;
            return continents;
        }).catch(() => []);
     }

    async fetchStaffApiService(): Promise<StaffInputsTypes[]|[]> {
        return fetch(this.StaffApiUrl).then((response) => response.text()).then((response) => {
            let r: Array<StaffInputsTypes> = JSON.parse(response);
            return r;
        }).catch((e) => {
            return [];
        });
    }

    async addStaffApiService(body: StaffInputsTypes): Promise<ApiServiceReturnTypes> {
        delete body._id;
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
        const id = body._id;
        delete body._id;
        return fetch(this.StaffApiUrl + "/" + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then((response) => {
            console.log(response);
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

    async deleteStaffApiService(id: string) {
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

    async sendMailWithNodeMailerService(to: string, subject: string, body: string, username: string) {
        let mailBody = {
            to: to,
            from: 'techidill@gmail.com',
            subject: subject,
            text: "Greeting " + username + ", " + body,
        }
        return fetch(this.MailerUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mailBody)
        }).then((response) => {
            if(response.status == 200) {
                return {
                    isValid: true,
                    message: "Email Sent Successfully"
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
                message: "Seems Like There Was An Sending Email. Please Try Again Later."
            };
        });
    }
}