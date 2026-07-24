import React from 'react';
import type { ICard } from '../../types';

interface CardProps {
  card: ICard;
}

const Card: React.FC<CardProps> = ({ card }) => {
  // Функция для красивого форматирования цены с пробелами (например, 14 500 руб)
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' руб';
  };

  return (
    <article className="card">
      <div className="card__image-wrapper">
        <img src={card.image} alt={card.title} className="card__image" />
      </div>
      <div className="card__content">
        <span className="card__author">{card.author}</span>
        <h3 className="card__title">{card.title}</h3>
        <p className="card__tech">{card.tech}</p>
        <span className="card__price">{formatPrice(card.price)}</span>
        
        {/* Кнопка как независимый блок button с модификатором */}
        <button className="card__button button button_theme_outlined-green">
          В корзину
        </button>
      </div>
    </article>
  );
};

export default Card;