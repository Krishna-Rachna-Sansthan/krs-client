function Card({ source, description }) {
  return (
    <section className="h-[100%] mw-[500px] card-container">
      <div className="">
        <img
          src={source}
          alt=""
          className="max-w-full w-[100%] object-cover rounded-lg"
        />
      </div>
      <div className="slide-description">
        <h3 className="text-xl font-bold my-3">{description.title}</h3>
        <p className="mt-2 mb-1 font-semibold">{description.instructor}</p>
      </div>
    </section>
  );
}

export default Card;
