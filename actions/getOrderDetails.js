import service from "@/lib/appwrite/dbConfig";
import { getOrderForProducts } from "@/lib/supabase/dbconfig";

export const getOrder = async (userid, orderid) => {
    try {
        const orderSupabase = await getOrderForProducts(userid, orderid);
        const orderAppwrite = await service.getOrderByID(userid, orderid);
        return {
            orderSupabase,
            orderAppwrite
        };
    } catch (error) {
        console.error("Error fetching orders:", error);
        return error; 
    }
}
