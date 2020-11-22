/*

    user address
    user name
    user phone
    user mail
    user order list :
        price
        name
        amount
        code
    user cost

*/

interface OrderType {
    order_productName: string;
    order_productPrice: number;
    order_amount: number;
    order_productCode: string;
}

export interface OrdersList {
    user_address: string;
    user_name: string;
    user_phone: string | number;
    user_mail: string;
    user_orders: OrderType[];
    deliveryReport: 'canceled' | 'recived' | 'waiting';
}
