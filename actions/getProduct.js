import service from "@/lib/appwrite/dbConfig";
import conf from "@/conf/conf";

const fetchProduct = async (slug, category) => {
    try {
        let collectionId;

        if (category === "tshirts") {
            collectionId = conf.appwriteTshirtsCollectionId;
        } else if (category === "sweatshirts") {
            collectionId = conf.appwriteSweatshirtsCollectionId;
        } else if (category === "hoodies") {
            collectionId = conf.appwriteHoodiesCollectionId;
        } else if (category === "mugs") {
            collectionId = conf.appwriteMugsCollectionId;
        } else if (category === "caps") {
            collectionId = conf.appwriteCapsCollectionId;
        } else {
            throw new Error(`Invalid category: ${category}`);
        }

        let wrongSlug, ProductSlug, Color, Size, Variants;
        const fetchProductSlug = await service.getPostBySlug(
            slug,
            collectionId
        );

        if (fetchProductSlug.documents.length != 0) {
            wrongSlug = false;
            ProductSlug = fetchProductSlug.documents[0];
            Color = fetchProductSlug.documents[0].color;
            Size = fetchProductSlug.documents[0].size;
            const products = await service.getPostsByName(
                fetchProductSlug.documents[0].name,
                collectionId
            );
            const documents = products.documents;
            const availableProducts = documents.filter((item) => item.isAvailable);
            const colorsizeslug = {};

            for (let item of availableProducts) {
                if (Object.keys(colorsizeslug).includes(item.color)) {
                colorsizeslug[item.color][item.size] = { slug: item.slug };
                } else {
                colorsizeslug[item.color] = {};
                colorsizeslug[item.color][item.size] = { slug: item.slug };
                }
            }

            Variants = colorsizeslug;
        } else {
            wrongSlug = true;
        }

        return {
            wrongSlug,
            Variants,
            Color,
            Size,
            ProductSlug,
        };
    } catch (error) {
        console.log(error);
    }
};

export default fetchProduct;
