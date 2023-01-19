import Image from 'next/image';
import { PencilIcon } from '@heroicons/react/24/solid';

export default function SidePanel() {
  return (
    <div className="fixed top-0 bottom-0 right-0 w-96">
      <div className="bg-secondarySurface p-11 h-full">
        <div className="bg-[#804858] py-4 pr-7 pl-32 rounded-3xl relative mb-11">
          <Image
            src="/bottle.svg"
            width={85}
            height={125}
            className="absolute -top-4 left-3"
          />
          <h5 className="text-white font-bold mb-3">
            Didn't find what you need?
          </h5>
          <button className="rounded-xl py-3 px-7 text-sm text-black bg-white font-bold">
            Add Item
          </button>
        </div>
        <div className="flex items-center justify-between text-dark">
          <h3 className="text-2xl font-bold">Shopping list</h3>
          <button>
            <PencilIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
