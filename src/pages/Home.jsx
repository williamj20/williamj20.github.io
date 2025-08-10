import Button from '../components/Button';

const Home = () => {
  return (
    <div className="flex flex-1 items-center justify-center flex-col">
      <div className="text-center mb-8">
        <h1 className="font-bold text-5xl mb-4">William Jiang</h1>
        <p className="text-xl">Software Engineer</p>
      </div>
      <div className="flex space-x-4">
        <Button text="About Me" />
        <Button text="Experiences" />
      </div>
    </div>
  );
};

export default Home;
