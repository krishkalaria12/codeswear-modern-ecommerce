import service from "@/lib/appwrite/dbConfig"

export const createOrder = async (formData) => {
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
        });
        return createOrderDetails
    } catch (error) {
        console.error(error);
    }
}






