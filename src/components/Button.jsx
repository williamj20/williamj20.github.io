const Button = ({ text }) => {
  return (
    <button className="px-4 py-3 w-40 bg-blue-300 text-black rounded-xl shadow-sm hover:shadow-md hover:brightness-95 transition-colors">
      {text}
    </button>
  );
};

export default Button;
