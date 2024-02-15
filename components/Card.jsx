import Image from 'next/image';
import { Button } from './ui/button';
import { useId } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Card({ name, size, color, imageUrl, Price, discountedPrice }) {
  const id = useId();
    return (
        <div className="flex p-4 dark:bg-[#374151] shadow-md flex-col items-center space-y-2">
            {<Image
                alt={name}
                className="h-auto w-auto object-cover"
                height={400}
                priority={true}
                src={imageUrl || "/placeholder.svg"}
                style={{
                    aspectRatio: "300/400",
                    objectFit: "cover",
                }}
                width={300}
            /> || <Skeleton />}
            <h2 className="text-lg font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full">{name}</h2>

            <div className="flex space-x-1">
              {color.map((c,index) => (
                <>
                  {<button key={`${imageUrl}-${c}-${index}`}  className={`h-5 w-5 rounded-full text-${c}-500`} style={{background: `${c}`}}></button> || <Skeleton />}
                </>
              ))}
            </div>

            <div className='flex space-x-2 items-center'>
                {<span className="text-2xl text-black font-bold dark:text-white">₹{Price}</span> || <Skeleton />}
                {<span className="text-xl line-through text-gray-500 dark:text-gray-400">{discountedPrice}</span> || <Skeleton />}
            </div>
            <div className="flex space-x-1">
                {size.map((s, index) => (
                    <Button key={index} className="hover:bg-[#bd1e59] bg-[#DB2777] dark:hover:bg-[#bd1e59] dark:text-white dark:bg-[#DB2777]">
                        {s.toUpperCase()}
                    </Button> || <Skeleton />
                ))}
            </div>
        </div>
    );
}

export default Card;
