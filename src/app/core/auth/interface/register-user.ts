export interface RegisterUser {
    userName :string;
    email:string;
    country:string;
    phoneNumber :string;
    password:string;
    confirmPassword:string;
    profileImage?:File;
}
