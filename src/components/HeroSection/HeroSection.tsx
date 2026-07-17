import "./HeroSection.css";
import forestBird from "../../assets/images/hero-section-img.png"

const HeroSection = () => {
 return (
  <section className="hero">
   <div className="hero__container container">
    <div className="hero__image-wrapper">
     <img
      className="hero__image"
      src={forestBird}
      alt="Лесная птица"
     />
    </div>

    <div className="hero__content">
     <h1 className="hero__title">
      Реплики картин <br />
      <span className="hero__title-accent">от Ink. House</span>
     </h1>
     <p className="hero__description">
      Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие
      произведения, доступные цены.
     </p>
     <a href="#catalog" className="hero__button button button_theme_outlined">
      Продукция
     </a>
    </div>
   </div>
  </section>
 );
};

export default HeroSection;
