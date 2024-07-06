import { FaYoutube } from "react-icons/fa";

export default function Header() {
  return (
    <nav className='flex items-center'>
      <div className='flex items-center'>
        <FaYoutube className='mr-1' />
        <h1 className='font-bold'>JunTube</h1>
      </div>
      <input className='w-[400px] h-8 ml-10' type='text' />
    </nav>
  );
}
