import { Link } from 'react-router';

const NavButton = ({ text, route }) => {
  return (
    <Link
      to={route}
      className="px-4 py-3 w-40 bg-blue-300 text-black rounded-xl shadow-sm hover:shadow-md hover:brightness-95 transition-colors text-center"
    >
      {text}
    </Link>
  );
};

export default NavButton;
