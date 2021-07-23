import { Gender, Positions } from "./enum";

export interface UserProfile {
  readonly user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  blacklist: boolean;
  gender: Gender;
  avatar: string | null;
  card_id: string;
  phone_number: string;
  // issue_date: Date;
  birthplace: string;
  address: string;
  hometown: string;
  positions: Positions;
}

export interface UserFormInput {
  avatar: string | null;
  firstName: string;
  lastName: string;
  email: string;
}
