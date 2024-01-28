'use client';
import Card from '@/components/Card'
import Link from 'next/link'
import conf from "../../conf/conf"
import service from '@/lib/appwrite/dbConfig'
import { useEffect, useState } from 'react'

function Sweatshirts() {
    const [Sweatshirts, setSweatshirts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await service.getAllPosts(conf.appwriteSweatshirtsCollectionId);
                const responses = data.documents;
    
                let SweatshirtsData = {};
    
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
    
                        if (item.name in SweatshirtsData) {
                            if (!SweatshirtsData[item.name].color.includes(item.color)) {
                                SweatshirtsData[item.name].color.push(item.color);
                            }
                            if (!SweatshirtsData[item.name].size.includes(item.size)) {
                                SweatshirtsData[item.name].size.push(item.size);
                            }
                        } else {
                            SweatshirtsData[item.name] = cleanItem;
                            SweatshirtsData[item.name].color = [item.color];
                            SweatshirtsData[item.name].size = [item.size];
                        }
                    }
                }
    
                setSweatshirts(Object.values(SweatshirtsData));
    
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <div className="dark:bg-[#1F2937] bg-white p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Sweatshirts.map((Sweatshirt, index) => (
                    <Link href={`/product/sweatshirts/${Sweatshirt.slug}`} key={index}>
                        <Card {...Sweatshirt} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Sweatshirts;
