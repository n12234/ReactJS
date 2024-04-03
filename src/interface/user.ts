
export interface AccountInfo {
    id: string;
    username: string;
    email: string,
    password: string,
    confirmPassword: string,
}

export type userLogin = Pick<AccountInfo, 'email'|'password'>

export type userRegister = Omit<AccountInfo, 'id'>