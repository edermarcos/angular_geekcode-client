import { MenuInterface } from './menu.interface';

export interface UserInterface {
  id?: string;
  idCategory?: string;
  idConfiguration?: string;
  idPicture?: string;
  idSession?: string;

  name?: string;
  lastName?: string;
  email?: string;
  job?: string;
  gender?: string;
  password?: string;
  aboutMe?: string;
  company?: string;
  country?: string;
  picture?: string;
  role?: string;
  roleName?: string;
  latitude?: number;
  longitude?: number;
  isAccountDisable?: boolean;
  isVerified?: boolean;
  verification?: string;
  menu?: MenuInterface[];

  createdAt?: string;
  updatedAt?: string;
}
