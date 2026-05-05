import type { ChangeEvent } from 'react';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="flex">
      <h1 className="text-2xl font-bold mt-2 mr-3">Search</h1>
      <input
        type="search"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value);
        }}
        placeholder="Search movies, TV, people..."
        className="w-67 p-3 rounded-xl bg-zinc-900 border border-gray-700
                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
    </div>
  );
};
