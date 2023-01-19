import Image from 'next/image';
import Link from 'next/link';
import {
  ListBulletIcon,
  ArrowPathIcon,
  ChartBarSquareIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  return (
    <nav className="fixed top-0 left-0 h-full w-[5.875rem] bg-white flex flex-col items-center justify-between">
      <div className="pt-10">
        <Image src="/logo.svg" width={42} height={42} alt="Shoppingify" />
      </div>
      <ul className="flex flex-col gap-16">
        <li>
          <Link href="/">
            <ListBulletIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <ArrowPathIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <ChartBarSquareIcon className="w-6 h-6" />
          </Link>
        </li>
      </ul>
      <div className="pb-10">
        <button className="rounded-full bg-accent w-11 h-11 flex items-center justify-center">
          <ShoppingCartIcon className="w-6 h-6 text-white" />
        </button>
      </div>
    </nav>
  );
}
