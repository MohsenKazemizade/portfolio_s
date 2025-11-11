const Home = () => {
  const onCta = () => {
    const target = window.innerWidth > 1024 ? "about" : "my-photo";
    document
      .getElementById(target)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Hello<span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">I am</span>
              <span className="intro animated-layer">
                Curious about people, ideas, and the future of innovation
              </span>
            </span>
            <span>
              <span className="animated-layer">Shadi</span>
            </span>
          </h1>
        </div>
      </div>
      <span
        className="animated-layer animated-btn cta"
        id="cta"
        onClick={onCta}
      >
        <span></span>
      </span>
    </section>
  );
};
export default Home;
