'use client';
import Card from '@/components/Card'
import Link from 'next/link'
import fetchData from '@/actions/getAllProducts';
import AllProductSkeleton from '@/components/skeletons/AllProductSkeleton';
import { useEffect, useState } from 'react'

function Sweatshirts() {
    const [Sweatshirts, setSweatshirts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataForSweatshirts = async () => {
            try {
                const data = await fetchData('sweatshirts');
                setSweatshirts(data);
                setLoading(false); 
            } catch (error) {
                console.error("Error fetching sweatshirts:", error);
            }
        };

        fetchDataForSweatshirts();
    }, []);

    return (
        <div className="dark:bg-[#1F2937] bg-white p-8">
            {loading ? (
                <AllProductSkeleton theme={"dark"} />
            ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Sweatshirts.map((Sweatshirt, index) => (
                    <Link href={`/product/sweatshirts/${Sweatshirt.slug}`} key={index}>
                        <Card {...Sweatshirt} />
                    </Link>
                ))}
            </div>
            )}
        </div>
    );
}

export default Sweatshirts;
