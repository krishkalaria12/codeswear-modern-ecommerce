'use client';
import Card from '@/components/Card'
import Link from 'next/link'
import service from '@/lib/appwrite/dbConfig'
import { useEffect, useState } from 'react'

function Tshirts() {
    const [tshirts, setTshirts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await service.getAllPosts();
                const responses = data.documents;
    
                let tshirtData = {};
    
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
    
                        if (item.name in tshirtData) {
                            if (!tshirtData[item.name].color.includes(item.color)) {
                                tshirtData[item.name].color.push(item.color);
                            }
                            if (!tshirtData[item.name].size.includes(item.size)) {
                                tshirtData[item.name].size.push(item.size);
                            }
                        } else {
                            tshirtData[item.name] = cleanItem;
                            tshirtData[item.name].color = [item.color];
                            tshirtData[item.name].size = [item.size];
                        }
                    }
                }
    
                setTshirts(Object.values(tshirtData));
    
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <div className="dark:bg-[#1F2937] bg-white p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {tshirts.map((tshirt, index) => (
                    <Link href={`/product/${tshirt.slug}`} key={index}>
                        <Card {...tshirt} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Tshirts;
