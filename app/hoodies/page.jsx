'use client';
import Card from '@/components/Card'
import Link from 'next/link'
import conf from "../../conf/conf"
import service from '@/lib/appwrite/dbConfig'
import { useEffect, useState } from 'react'

function Hoodies() {
    const [hoodies, setHoodies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await service.getAllPosts(conf.appwriteHoodiesCollectionId);
                const responses = data.documents;
    
                let hoodiesData = {};
    
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
    
                        if (item.name in hoodiesData) {
                            if (!hoodiesData[item.name].color.includes(item.color)) {
                                hoodiesData[item.name].color.push(item.color);
                            }
                            if (!hoodiesData[item.name].size.includes(item.size)) {
                                hoodiesData[item.name].size.push(item.size);
                            }
                        } else {
                            hoodiesData[item.name] = cleanItem;
                            hoodiesData[item.name].color = [item.color];
                            hoodiesData[item.name].size = [item.size];
                        }
                    }
                }
    
                setHoodies(Object.values(hoodiesData));

            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <div className="dark:bg-[#1F2937] bg-white p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {hoodies.map((tshirt, index) => (
                    <Link href={`/product/${tshirt.slug}`} key={index}>
                        <Card {...tshirt} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Hoodies;
