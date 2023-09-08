import BackArrow from "@/components/ui/BackArrow";

export default function MoviesLoading() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between text-center p-24'>
      {/* Header */}
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <div className='fixed left-0 top-0 flex w-full justify-between items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 px-5 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          <BackArrow />
          <p>
            Movies Fetched with &nbsp;
            <code className='font-mono font-bold'>loading.tsx</code>
          </p>
        </div>

        {/* Footer */}
        <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <h1 className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'>
            By usbalien.dev
          </h1>
        </div>
      </div>

      <div className='my-12 animate-pulse'>
        {Array.from({ length: 12 }, (movie, i) => (
          <div
            className='text-white flex flex-col justify-center items-center my-12'
            key={i}>
            <div className='bg-gray-700/50 my-6 px-6 rounded-lg'>
              <h2 className='text-lg invisible'>This is a skeleton render</h2>
            </div>
            <div className='w-full lg:w-1/2 bg-gray-700/50 h-48 lg:h-96 rounded-2xl'></div>
          </div>
        ))}
      </div>
    </main>
  );
}
