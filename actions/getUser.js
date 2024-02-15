"use server";

import authService from "@/lib/appwrite/authConfig";

const accountDetails = async () => {
    const data = await authService.getCurrentUser();
    if (data == undefined || data == null) {
        router.push("/login");
        toast.error("Login to view your account");
    } else {
        return data;
    }
};

export default accountDetails;
