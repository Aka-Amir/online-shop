export interface UserInfo {
    username: string;
    password: string;
    role: 'admin' | 'analist' | 'product-manager';
}
