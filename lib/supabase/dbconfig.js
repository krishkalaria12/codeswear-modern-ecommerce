import { supabase } from "./supabaseClient"

export const ReadAllOrders = async () => {
    let { data: orders, error } = await supabase
    .from('orders')
    .select('*')
    console.log(orders);
    return orders;
}

export const createOrderForProducts = async (products, slug, orderid) => {
    try {
        const { data, error } = await supabase
        .from('orders')
        .insert([
            { 
                products: products, 
                slug: slug,
                orderid: orderid,
            }
        ])
        .select()

        if (data) {
            return data;
        }
        else if (error) {
            return error;
        }
    } catch (error) {
        console.log(error);
    }
}

