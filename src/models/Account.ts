import { v4 as uuid } from 'uuid';

class Account {
  uuid: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  user_id: string;
  profile: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(account: any) {
    this.uuid = uuid();
    this.username = account.name;
    this.email = account.email;
    this.phone = account.phone;
    this.password = account.password;
    this.user_id = account.user_id;
    this.profile = account.profile;
    this.createdAt = new Date();
    this.updatedAt = this.createdAt;
  }
}

export default Account;
