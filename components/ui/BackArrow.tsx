import Link from "next/link";

const BackArrow = () => {
  return (
    <Link href='/' legacyBehavior>
      <a className='bg-black text-white rounded-full cursor-pointer mr-5'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='3'
            d='M10 19l-7-7m0 0l7-7m-7 7h18'
          />
        </svg>
      </a>
    </Link>
  );
};

export default BackArrow;
