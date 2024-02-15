'use client';
import Card from '@/components/Card'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import fetchData from '@/actions/getAllProducts';
import AllProductSkeleton from '@/components/skeletons/AllProductSkeleton';

function Mugs() {
    const [Mugs, setMugs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataFormugs = async () => {
            try {
                const data = await fetchData('mugs');
                setMugs(data);
                setLoading(false); 
            } catch (error) {
                console.error("Error fetching mugs:", error);
            }
        };

        fetchDataFormugs();
    }, []);

    return (
        <div className="dark:bg-[#1F2937] bg-white p-8">
            {loading ? (
                <AllProductSkeleton theme={"dark"} />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Mugs.map((mug, index) => (
                        <Link href={`/product/mugs/${mug.slug}`} key={index}>
                            <Card {...mug} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Mugs;
