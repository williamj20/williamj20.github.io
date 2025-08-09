import Button from '../components/Button';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-dvh background-colour flex flex-col">
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
      <Footer />
    </div>
  );
};

export default Home;
