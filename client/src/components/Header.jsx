import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/' className="text-3xl font-extrabold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-2 text-yellow-400 animate-spin-slow" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6.647 2.5a.5.5 0 0 1 .5.5v14.793l5-5V6.414l-3.646-3.647A.5.5 0 0 1 7.147 2h-.5a.5.5 0 0 1-.5-.5zM4 5.5a1.5 1.5 0 0 1 1.5-1.5h.5a1.5 1.5 0 0 1 1.06.44L12.5 10l-6.44 6.06A1.5 1.5 0 0 1 5 15.5h-.5a1.5 1.5 0 0 1-1.5-1.5v-8zM17 5.5a1.5 1.5 0 0 1 1.5-1.5h.5a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.06-.44L11.5 10l6.44-6.06A1.5 1.5 0 0 1 17 5.5z"/>
          </svg>
          Star Wars
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to='/' className="hover:text-yellow-400">Home</Link>
          </li>
          <li>
            <Link to='/about' className="hover:text-yellow-400">About</Link>
          </li>
          
        </ul>
      </div>
    </header>
  );
}
