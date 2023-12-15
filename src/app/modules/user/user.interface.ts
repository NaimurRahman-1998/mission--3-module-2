export interface IUser  {
    id : string;
    password : string;
    needsPasswordChange : boolean;
    role : 'Admin' | 'Student' | 'Faculty' ;
    status : 'in-progress' | 'blocked';
    isDeleted : boolean;
}
