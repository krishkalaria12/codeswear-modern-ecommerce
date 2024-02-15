'use client';
import Card from '@/components/Card'
import Link from 'next/link'
import fetchData from '@/actions/getAllProducts';
import AllProductSkeleton from '@/components/skeletons/AllProductSkeleton';
import { useEffect, useState } from 'react'

function Caps() {
    const [Caps, setCaps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataForCaps = async () => {
            try {
                const data = await fetchData('caps');
                setCaps(data);
                setLoading(false); 
            } catch (error) {
                console.error("Error fetching capss:", error);
            }
        };

        fetchDataForCaps();
    }, []);

    return (
        <div className="dark:bg-[#1F2937] bg-white p-8">
            {loading ? (
                <AllProductSkeleton theme={"dark"} />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Caps.map((caps, index) => (
                        <Link href={`/product/caps/${caps.slug}`} key={index}>
                            <Card {...caps} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Caps;
