function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center gap-4 bg-pink-500 text-white">
          <div className="space-y-2">
            <div className="mx-auto flex items-center justify-center rounded-full overflow-hidden bg-gray-100 w-16 h-16 dark:bg-gray-950 animate-pulse">
              <img alt="Logo" className="aspect-square object-cover" height="64" src="/placeholder.svg" width="64" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">Loading...</h1>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-center max-w-3xl gap-4 sm:grid-cols-2 md:gap-8">
            <div className="space-y-4">
              <p className="text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let us distract you with some beautiful images while we load your data.
              </p>
              <img
                alt="Image"
                className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center animate-pulse"
                height="400"
                src="/placeholder.svg"
                width="800"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let us distract you with some beautiful images while we load your data.
              </p>
              <img
                alt="Image"
                className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center animate-pulse"
                height="400"
                src="/placeholder.svg"
                width="800"
              />
            </div>
          </div>
        </div>
      )
  }
  
export default Loading