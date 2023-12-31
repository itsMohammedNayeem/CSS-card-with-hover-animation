function App() {
  return (
    <div className="card text-neutral-100 bg-[url('/img/macbookPic.png')] bg-cover pt-40 max-w-[35ch] rounded-lg overflow-hidden">
      <div className="card-content p-[1.5rem] bg-gradient-to-b from-firstGrad via-secondGrad via-20% to-lastGrad">
        <h2 className="card-title text-2xl font-bold relative mb-5 w-max outline-red after:content-[''] after:left-[calc(-1.5rem)] after:bottom-0 after:absolute after:h-1 after:bg-accent-400 after:w-[calc(100%_+_1.5rem)]">
          Something awesome
        </h2>
        <p className="card-body mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem
          facilis.
        </p>
        <a
          href="#"
          className="button cursor-pointer inline-block no-underline text-buttonColor bg-accent-400 py-[0.5em] px-[1.25em] hover:bg-neutral-100 focus:bg-neutral-100"
        >
          LEARN MORE
        </a>
      </div>
    </div>
  );
}

export default App;
