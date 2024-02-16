import service from "@/lib/appwrite/dbConfig"
import { createOrderForProducts } from "@/lib/supabase/dbconfig";

export const createOrder = async (formData, items) => {
    try {
        const createOrderDetails = await service.createOrder({
            firstname: formData.firstname,
            lastname: formData.lastname,
            email: formData.email,
            phoneno: formData.phoneno,
            city: formData.city,
            country: formData.country,
            flatno: formData.flatno,
            state: formData.state,
            orderid: formData.id,
            postalCode: formData.postalCode,
            userid: formData.userid
        });
        const arrayofObj = [];
        const compressedItems = {};
        items.forEach((item, index) => {
            const key = `item${index + 1}`;
            compressedItems[key] = item;
            arrayofObj.push(compressedItems)
        });
        const createOrderProduct = await createOrderForProducts(arrayofObj, formData.id, formData.userid)
        return {createOrderDetails, createOrderProduct}
    } catch (error) {
        console.error(error);
    }
}






