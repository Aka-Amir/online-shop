export interface UserInfo {
    username: string;
    password: string;
    role: 'admin' | 'analist' | 'seller';
}

export const RolesToPersian = {
    admin: 'مدیر',
    analist: 'تحلیلگر',
    seller: 'فروشنده'
};
