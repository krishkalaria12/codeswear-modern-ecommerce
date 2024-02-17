'use client';
import Card from '@/components/Card'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import fetchData from '@/actions/getAllProducts';
import { useSelector } from 'react-redux';
import AllProductSkeleton from '@/components/skeletons/AllProductSkeleton';

function Tshirts() {
    const [tshirts, setTshirts] = useState([]);
    const [loading, setLoading] = useState(true);
    const isDark = useSelector((state) => state.theme.isDark);

    useEffect(() => {
        const fetchDataForTshirts = async () => {
            try {
                const data = await fetchData('tshirts');
                setTshirts(data);
                setLoading(false); 
            } catch (error) {
                console.error("Error fetching tshirts:", error);
            }
        };

        fetchDataForTshirts();
    }, []);

    return (
        <div className="dark:bg-[#1F2937] bg-white p-8">
            {loading ? (
                <AllProductSkeleton theme={isDark ? 'dark' : 'light'} />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {tshirts.map((tshirt, index) => (
                        <Link href={`/product/tshirts/${tshirt.slug}`} key={index}>
                            <Card {...tshirt} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Tshirts;
