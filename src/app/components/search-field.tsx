import Image from "next/image";

const SearchField = ({
  setSearchValue,
  searchValue,
}: {
  setSearchValue: (value: string) => void;
  searchValue: string;
}) => {
  return (
    <div className="relative">
      <input
        type="text"
        className="border rounded-md pl-3 pr-10 py-2 w-full focus:outline-none focus:border-blue-400"
        placeholder="Search..."
        aria-label="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <Image src="/search.svg" alt="search icon" width={16} height={16} />
      </div>
    </div>
  );
};

export default SearchField;
