export interface AppProps {
    title: string;
  }
  
  export interface NameModel {
    first: string;
    last: string;
  }
  
  export interface LoginModel {
    uuid: string;
  }
  
  export interface UserModel {
    name: NameModel;
    login: LoginModel;
    email: string;
  }

  export interface UserProps {
    name: NameModel;
    email: string;
  }

  export interface NavbarProps {
    className?: string;
  }
  