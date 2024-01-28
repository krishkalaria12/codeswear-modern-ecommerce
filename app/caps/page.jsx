'use client';
import Card from '@/components/Card'
import Link from 'next/link'
import conf from "../../conf/conf"
import service from '@/lib/appwrite/dbConfig'
import { useEffect, useState } from 'react'

function Caps() {
    const [Caps, setCaps] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await service.getAllPosts(conf.appwriteCapsCollectionId);
                const responses = data.documents;
    
                let capsData = {};
    
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
    
                        if (item.name in capsData) {
                            if (!capsData[item.name].color.includes(item.color)) {
                                capsData[item.name].color.push(item.color);
                            }
                            if (!capsData[item.name].size.includes(item.size)) {
                                capsData[item.name].size.push(item.size);
                            }
                        } else {
                            capsData[item.name] = cleanItem;
                            capsData[item.name].color = [item.color];
                            capsData[item.name].size = [item.size];
                        }
                    }
                }
    
                setCaps(Object.values(capsData));
    
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <div className="dark:bg-[#1F2937] bg-white p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Caps.map((cap, index) => (
                    <Link href={`/product/caps/${cap.slug}`} key={index}>
                        <Card {...cap} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Caps;
