'use client';
import Card from '@/components/Card'
import Link from 'next/link'
import conf from "../../conf/conf"
import service from '@/lib/appwrite/dbConfig'
import { useEffect, useState } from 'react'

function Mugs() {
    const [Mugs, setMugs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await service.getAllPosts(conf.appwriteMugsCollectionId);
                const responses = data.documents;
    
                let MugsData = {};
    
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
    
                        if (item.name in MugsData) {
                            if (!MugsData[item.name].color.includes(item.color)) {
                                MugsData[item.name].color.push(item.color);
                            }
                            if (!MugsData[item.name].size.includes(item.size)) {
                                MugsData[item.name].size.push(item.size);
                            }
                        } else {
                            MugsData[item.name] = cleanItem;
                            MugsData[item.name].color = [item.color];
                            MugsData[item.name].size = [item.size];
                        }
                    }
                }
    
                setMugs(Object.values(MugsData));
    
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <div className="dark:bg-[#1F2937] bg-white p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Mugs.map((mug, index) => (
                    <Link href={`/product/mugs/${mug.slug}`} key={index}>
                        <Card {...mug} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Mugs;
