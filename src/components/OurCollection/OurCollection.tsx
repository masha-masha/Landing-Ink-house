import './OurCollection.css'
import { useState } from 'react';
import { reproductionsData } from "../../data/data.ts"
import Card from './Card.tsx';

type CountryType = 'france' | 'germany' | 'england';

const OurCollection = () => {
  const [activeCountry, setActiveCountry] = useState<CountryType>('france');

  // 2. Фильтруем данные на основе активного стейта
  const filteredCards = reproductionsData.filter(
    (card) => card.country === activeCountry
  );

  return (
    <section className="reproductions">
      {/* Наш переиспользуемый класс .container для центрирования сетки */}
      <div className="reproductions__container container">
        
        {/* Шапка секции с заголовком и табами */}
        <div className="reproductions__header">
          <h2 className="reproductions__title">Репродукции</h2>
          
          {/* Меню переключения (блоки tabs и tab-button по БЭМ) */}
          <nav className="reproductions__tabs tabs">
            <button
              onClick={() => setActiveCountry('france')}
              className={`tabs__button ${
                activeCountry === 'france' ? 'tabs__button_active' : ''
              }`}
            >
              Франция
            </button>
            <button
              onClick={() => setActiveCountry('germany')}
              className={`tabs__button ${
                activeCountry === 'germany' ? 'tabs__button_active' : ''
              }`}
            >
              Германия
            </button>
            <button
              onClick={() => setActiveCountry('england')}
              className={`tabs__button ${
                activeCountry === 'england' ? 'tabs__button_active' : ''
              }`}
            >
              Англия
            </button>
          </nav>
        </div>

        {/* Сетка карточек */}
        <div className="reproductions__grid">
          {filteredCards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default OurCollection