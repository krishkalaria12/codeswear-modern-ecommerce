import conf from "@/conf/conf";
import service from "@/lib/appwrite/dbConfig";

const fetchData = async (category) => {
    try {
        let collectionId;

        if (category === 'tshirts') {
            collectionId = conf.appwriteTshirtsCollectionId;
        } else if (category === 'sweatshirts') {
            collectionId = conf.appwriteSweatshirtsCollectionId;
        } else if (category === 'hoodies') {
            collectionId = conf.appwriteHoodiesCollectionId;
        } else if (category === 'mugs') {
            collectionId = conf.appwriteMugsCollectionId;
        } else if (category === 'caps') {
            collectionId = conf.appwriteCapsCollectionId;
        } else {
            throw new Error(`Invalid category: ${category}`);
        }

        const data = await service.getAllPosts(collectionId);
        const responses = data.documents;

        let categoryData = {};

        for (let item of responses) {
            if (item.isAvailable) {
                let cleanItem = {
                    name: item.name,
                    slug: item.slug,
                    size: item.size,
                    color: item.color,
                    description: item.description,
                    isAvailable: item.isAvailable,
                    imageUrl: item.imageUrl,
                    Price: item.Price,
                    discountedPrice: item.discountedPrice
                };

                if (item.name in categoryData) {
                    if (!categoryData[item.name].color.includes(item.color)) {
                        categoryData[item.name].color.push(item.color);
                    }
                    if (!categoryData[item.name].size.includes(item.size)) {
                        categoryData[item.name].size.push(item.size);
                    }
                } else {
                    categoryData[item.name] = cleanItem;
                    categoryData[item.name].color = [item.color];
                    categoryData[item.name].size = [item.size];
                }
            }
        }

        return Object.values(categoryData);

    } catch (error) {
        return error;
    }
};

export default fetchData
