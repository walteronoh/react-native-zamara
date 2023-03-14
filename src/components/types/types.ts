export interface LoginTypes {
    username: string,
    password: string
}

export interface ApiServiceReturnTypes {
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

export interface StaffInputsTypes {
    id?: number,
    staffNumber: string,
    staffName: string,
    staffEmail: string,
    department: string,
    salary: number
};

export const AddStaffProps: StaffInputsTypes = {
    staffNumber: "",
    staffName: "",
    staffEmail: "",
    department: "",
    salary: 0
};

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

export enum EmailSubjects {
    CREATED = "Profile Notification #Created",
    UPDATED = "Profile Notification #Edited",
    DELETED = "Profile Notification #Deleted"
}

export enum EmailBodies {
    CREATED = "we are glad to inform you that your staff profile has been created.",
    UPDATED = "we are glad to inform you that your staff profile has been updated.",
    DELETED = "we are sad to inform you that your staff profile has been deleted."
}