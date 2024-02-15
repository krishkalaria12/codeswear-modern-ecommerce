import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function CustomLoadingSkeleton({ theme }) {
    const skeletonColor = theme === 'dark' ? '#444' : '#f0f0f0';
    const skeletonHighlightColor = theme === 'dark' ? '#555' : '#e0e0e0';

    return (
        <SkeletonTheme color={skeletonColor} highlightColor={skeletonHighlightColor}>
            <div className={`flex lg:flex-row flex-col items-center justify-center h-full bg-${theme === 'dark' ? 'gray-900' : 'white'}`}>
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-4 dark:bg-[#374151] shadow-md flex-col items-center space-y-4">
                        <Skeleton
                            height="30vw"
                            width="100%"
                            duration={1.5}
                            style={{
                                borderRadius: '8px',
                            }}
                        />
                        <Skeleton height={24} width={150} />
                        <div className="flex space-x-2">
                            {[...Array(3)].map((_, index) => (
                                <Skeleton key={index} circle={true} height={20} width={20} />
                            ))}
                        </div>
                        <div className="flex space-x-2 items-center">
                            <Skeleton height={28} width={60} />
                            <Skeleton height={24} width={60} />
                        </div>
                        <div className="flex space-x-2">
                            {[...Array(3)].map((_, index) => (
                                <Skeleton key={index} height={32} width={32} circle={true} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SkeletonTheme>
    );
}

export default CustomLoadingSkeleton;
