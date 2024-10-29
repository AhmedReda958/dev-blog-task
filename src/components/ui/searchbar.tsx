import { Search } from "lucide-react";

export default function SearchBar({
  placeholder = "Search...",
}: {
  placeholder?: string;
}) {
  return (
    <div className="relative w-full sm:w-[320px]">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
        placeholder={placeholder}
      />
    </div>
  );
}
