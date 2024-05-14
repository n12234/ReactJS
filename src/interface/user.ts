
export interface AccountInfo {
    id: string;
    email: string,
    password: string,
}

export type userLogin = Pick<AccountInfo, 'email'|'password'>

export type userRegister = Omit<AccountInfo, 'id'>