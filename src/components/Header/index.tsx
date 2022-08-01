import Image from 'next/image';
import Link from 'next/link';
import { HeaderMenu } from './HeaderMenu';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full py-2 z-[99999] bg-white shadow-sm shadow-main lg:bg-transparent lg:shadow-none">
      <div className="container mx-auto py-2 flex justify-between items-center px-2">
        <Link href="/" passHref>
          <a className="text-main font-gotu flex justify-center items-center gap-2">
            <Image src="/images/logo.png" alt="Soul Studio - Pilates" width="50" height="50" objectFit="contain" />
            <span>Soul Studio.</span>
          </a>
        </Link>

        <HeaderMenu />
      </div>
    </header>
  );
};
