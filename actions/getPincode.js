const checkPinAvailability = async (pincode) => {
    try {
        const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
        const pinjson = await response.json();
        const [{Status}] = pinjson
        return Status;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export default checkPinAvailability;
