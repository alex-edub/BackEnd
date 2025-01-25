import Order from "../model/order.js";
import User from "../model/User.js";

const syncTableDataBase = async ()  =>{
    await Order.sync({force:true});
    await User.sync({force:true});
}
export default syncTableDataBase;