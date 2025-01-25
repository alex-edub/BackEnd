import Order from "../model/order.js";
import User from "../model/User.js";

const syncTableDataBase = async ()  =>{
    await Order.sync({force:false});
    await User.sync({force:false});
}
export default syncTableDataBase;