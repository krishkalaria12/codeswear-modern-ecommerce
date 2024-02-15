'use client';
import Card from '@/components/Card'
import Link from 'next/link'
import fetchData from '@/actions/getAllProducts';
import AllProductSkeleton from '@/components/skeletons/AllProductSkeleton';
import { useEffect, useState } from 'react'

function Hoodies() {
    const [hoodies, setHoodies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataForHoodies = async () => {
            try {
                const data = await fetchData('hoodies');
                setHoodies(data);
                setLoading(false); 
            } catch (error) {
                console.error("Error fetching Hoodies:", error);
            }
        };

        fetchDataForHoodies();
    }, []);


    return (
        <div className="dark:bg-[#1F2937] bg-white p-8">
            {loading ? (
                <AllProductSkeleton theme={"dark"} />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {hoodies.map((hoodie, index) => (
                        <Link href={`/product/hoodies/${hoodie.slug}`} key={index}>
                            <Card {...hoodie} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Hoodies;
