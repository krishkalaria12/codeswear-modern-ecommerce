import authService from "@/lib/appwrite/authConfig";

const accountDetails = async () => {
    const data = await authService.getCurrentUser();
    if (data == undefined || data == null) {
        return null;
    } else {
        return data;
    }
};

export default accountDetails;
