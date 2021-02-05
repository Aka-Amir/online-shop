const ApiServer = "http:/localhost";
const ApiPort = ":3000";
const ApiAdress = ApiServer + ApiPort;
const ApiUsers = ApiAdress + "/user";
const ApiAdmin = ApiAdress + "/admin";

export const AdminRoutes = {
    TOKEN : ApiAdmin + "/token",
    LOGIN : ApiAdmin + "/login",
    VIEWS : ApiAdmin + "/views",
    ORDERS_COUNT : ApiAdmin + "/orderscount",
    INCOME : ApiAdmin + "/income",
    TICKET_COUNT : ApiAdmin + "/ticketcount",
    INCOME_STATISTICS: ApiAdmin + "/incomestatistics"

}