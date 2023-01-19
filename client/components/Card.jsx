import { PlusIcon } from '@heroicons/react/24/outline';

export default function Card({ ingredient }) {
  return (
    <div className="bg-white rounded-xl shadow-customShadow p-4">
      <div className="flex items-center justify-between gap-2">
        <div>{ingredient.name}</div>
        <PlusIcon className="w-6 h-6" />
      </div>
    </div>
  );
}
