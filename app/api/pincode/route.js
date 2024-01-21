import { NextResponse, NextRequest } from "next/server";

export async function GET() {
    return new NextResponse(JSON.stringify([111222,334455]), {status: 200})
}


// export const getProducts = async (req, res) => {
//     try {
//         const products = await product.find();

//         return new NextResponse(JSON.stringify(products), { status: 200 });
//     } catch (error) {
//         console.error("Error fetching products:", error);
//         return new NextResponse("Internal Server Error", { status: 500 });
//     }
// };

// export default connectDb(getProducts);