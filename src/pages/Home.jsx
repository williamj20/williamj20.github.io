const Home = () => {
  return (
    <div className="flex flex-1 items-center justify-center flex-col">
      <div className="text-center">
        <h1 className="font-bold text-5xl mb-8">William Jiang</h1>
        <p className="text-xl w-xl">
          Hey! &#x1F44B; I'm a computer science graduate from UWaterloo, and
          currently a Software Engineer @{' '}
          <a
            href="https://www.capitalone.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            Capital One
          </a>
          . Feel free to connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/william-jiang/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            LinkedIn
          </a>
          , or reach out via{' '}
          <a
            href="mailto:williamjiang20@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            email
          </a>{' '}
          &#128513;
        </p>
      </div>
    </div>
  );
};

export default Home;
