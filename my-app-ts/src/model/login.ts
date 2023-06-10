export interface ILogin {
    username: string,
    password: string,
    handleSubmit: (e:any) => void,
    setUser: (e:any) => void
    setPassword: (e:any) => void
}