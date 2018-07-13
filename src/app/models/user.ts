
export interface User {
  uid: string;
  email: string;
  photoUrl?: string;
  roles: string[]; // 'admin', 'inspector', 'owner'
}
