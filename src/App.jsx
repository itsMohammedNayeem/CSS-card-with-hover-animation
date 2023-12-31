function App() {
  return (
    <div className="card group text-neutral-100 bg-[url('/img/macbookPic.png')] bg-cover pt-40 max-w-[35ch] rounded-lg hover:scale-105 focus-within:scale-105 transition-transform duration-500 ease-in-out overflow-hidden">
      <div className="card-content p-[1.5rem] bg-gradient-to-b from-firstGrad via-secondGrad via-20% to-lastGrad translate-y-[70%] duration-500 group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform group-hover:delay-500 group-focus-within:delay-500 group-focus-within:duration-500">
        <h2 className="card-title text-2xl font-bold relative mb-5 w-max outline-red after:content-[''] after:left-[calc(-1.5rem)] after:bottom-[-2px] after:absolute after:h-1 after:bg-accent-400 after:w-[calc(100%_+_1.5rem)] after:scale-x-0 group-hover:after:scale-x-100 group-focus-within:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left">
          Something awesome
        </h2>
        <p className="card-body text-[rgb(255_255_255/0.85)] mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem
          facilis.
        </p>
        <a
          href="#"
          className="button cursor-pointer rounded inline-block no-underline text-buttonColor bg-accent-400 py-[0.5em] px-[1.25em] hover:bg-neutral-100 focus:bg-neutral-100"
        >
          LEARN MORE
        </a>
      </div>
    </div>
  );
}

export default App;
