import Card from '@/components/Card'
import React from 'react'
import Link from 'next/link'

function Caps() {
    return (
        <div className="dark:bg-[#1F2937] bg-white p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Link href={"/product/wear-the-code"}>
                    <Card />
                </Link>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Caps