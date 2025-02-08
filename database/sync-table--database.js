import Order from "../model/order.js";
import User from "../model/User.js";
XMLSerializer

const syncTableDataBase = async ()  =>{
    await Order.sync({force:true});
    await User.sync({force:true});
}
export default syncTableDataBase;