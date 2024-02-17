import { supabase } from "./supabaseClient"

export const ReadAllOrders = async (orderId) => {
    try {
        const { data: orders, error } = await supabase
            .from('orders')
            .select('*')
            .eq('orderid', orderId);
        if (error) {
            return error;
        }
        return orders;
    } catch (error) {
        console.error(`Error in ReadAllOrders: ${error.message}`);
        return error;
    }
};

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

export const getOrderForProducts = async (userid, orderid) => {
    try {
        let { data: orders, error } = await supabase
        .from('orders')
        .select("*")
        .eq('slug', orderid)
        .eq('orderid', userid)

        if (orders) {
            return orders;
        }
        else if (error) {
            return error;
        }
    } catch (error) {
        console.log(error);
    }
}

