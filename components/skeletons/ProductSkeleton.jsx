import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function CustomLoadingSkeleton() {
  const skeletonColor = '#f0f0f0';
  const skeletonHighlightColor = '#e0e0e0';

  return (
    <SkeletonTheme color={skeletonColor} highlightColor={skeletonHighlightColor}>
      <div className="dark:bg-gray-900 dark:text-white bg-white text-black">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="flex items-center flex-col-reverse lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="mb-6">
                  <Skeleton
                    height="50vw"
                    width="100%"
                    duration={1.5}
                    style={{
                      borderRadius: '8px',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 px-4">
              <h1 className="text-3xl font-bold mb-2">
                <Skeleton height={24} width="80%" />
              </h1>
              <h2 className="text-xl mb-6">
                <Skeleton height={20} width="60%" />
              </h2>
              <p className="mb-4">
                <Skeleton count={4} />
              </p>
              <h3 className="text-lg font-semibold mb-3">
                <Skeleton height={20} width="40%" />
              </h3>
              <ul className="list-disc list-inside mb-6 dark:text-gray-300 text-gray-700">
                <Skeleton count={5} />
              </ul>
              <p className="font-semibold dark:text-gray-300 text-gray-700">
                Tags: <Skeleton height={20} width="60%" />
              </p>
              <div className="flex mt-4 space-x-8 items-center">
                <div className="flex space-x-2 mt-2 items-center">
                  {[...Array(3)].map((_, index) => (
                    <Skeleton
                      key={index}
                      height={20}
                      width={20}
                      circle={true}
                      style={{ margin: '0 auto' }}
                    />
                  ))}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <Skeleton height={32} width="60%" />
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-[#111827] transition-colors duration-300">
                <div className="max-w-4xl pt-4">
                  <div className="flex flex-col flex-wrap gap-4">
                    <div className="flex flex-col space-y-4">
                      <div className="flex space-x-2">
                        <Skeleton height={32} width={32} />
                        <Skeleton height={32} width={32} />
                        <Skeleton height={32} width={32} />
                      </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-3">
                        <Skeleton height={32} width={120} />
                        <Skeleton height={32} width={120} />
                      </div>
                      <div className="flex space-x-4">
                        {[...Array(2)].map((_, index) => (
                          <Skeleton
                            key={index}
                            height={40}
                            width={120}
                            style={{ borderRadius: '20px' }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                        Exciting Offers:
                      </div>
                      {[...Array(4)].map((_, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Skeleton height={20} width={20} circle={true} />
                          <Skeleton height={16} width="80%" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default CustomLoadingSkeleton;
