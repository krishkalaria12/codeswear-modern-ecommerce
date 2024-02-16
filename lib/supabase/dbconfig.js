import { supabase } from "./supabaseClient"

export const ReadAllOrders = async () => {
    let { data: orders, error } = await supabase
    .from('orders')
    .select('*')
    console.log(orders);
    return orders;
}