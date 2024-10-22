import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia
            quaerat dolor nesciunt minima delectus facilis molestiae animi
            veritatis voluptatum? Nobis quibusdam voluptatibus quos architecto
            illo eligendi quasi voluptates facilis?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
