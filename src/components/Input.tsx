import { FormEvent } from 'react';
import { useAppContext } from '../context/AppContext';

export default function Input() {
  const { setKeyword } = useAppContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const searchKeyword = formData.get('keyword') as string;
    if (!searchKeyword) return;

    setKeyword(searchKeyword);
  };

  return (
    <form
      className="flex items-center border border-gray-300 rounded-lg w-full max-w-sm mx-auto my-4"
      onSubmit={handleSubmit}
    >
      <label htmlFor="keyword"></label>
      <input
        name="keyword"
        id="keyword"
        type="text"
        placeholder="Enter a keyword"
        className="flex-1 px-4 py-2 outline-none"
      />
      <button className="bg-slate-500 text-white px-4 py-2 hover:bg-slate-600 cursor-pointer">
        Search
      </button>
    </form>
  );
}
