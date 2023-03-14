export interface LoginTypes {
    username: string,
    password: string
} 

export interface LoginApiServiceReturnTypes {
    isValid: boolean,
    message: string,
};

export interface LoginEndpointDataTypes {
    id: number,
    username: string,
    email: string,
    firstname: string,
    lastname: string,
    gender: string,
    image: string,
    token: string
}

export type RootStackParamList = {
    Login: undefined,
    Dashboard: undefined
};

export type DashboardDrawerParamList = {
    Home: undefined,
    Staff: undefined
    Continents: undefined
    Logout: undefined
}