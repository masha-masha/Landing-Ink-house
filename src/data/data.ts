import type { ICard } from '../types';
import amurImg from './assets/images/france/охота-амура.png'
import ladyImg from './assets/images/france/lady.png';
import procedureImg from './assets/images/france/процедура.png';
import roseImg from './assets/images/france/роза.png';
import birdsImg from './assets/images/france/птичья-трапеза.png';
import fishImg from './assets/images/france/пейзаж-с-рыбой.png';

import underTheCity from './assets/images/germany/над городом.png';
import chicks from './assets/images/germany/птенцы.png';
import amongTheLeaves from './assets/images/germany/среди-листьев.png';
import brightBird from './assets/images/germany/яркая-птица.png';
import woodpeckers from './assets/images/germany/дятлы.png';
import highWaters from './assets/images/germany/большие-воды.png';

import wildBeast from './assets/images/england/дикий-зверь.png';
import rockyShore from './assets/images/england/скалистый-берег.png';
import riversAndMountains from './assets/images/england/река-и-горы.png';
import whiteParrot from './assets/images/england/белый-попугай.png';
import nightFish from './assets/images/england/ночная-рыба.png';
import redCat from './assets/images/england/рыжий-кот.png';

export const reproductionsData: ICard[] = [
  {
    id: 1,
    country: 'france',
    author: 'Марсель Руссо',
    title: 'Охота Амура',
    tech: 'Холст, масло (50х80)',
    price: 14500,
    image: amurImg,
  },
  {
    id: 2,
    country: 'france',
    author: 'Анри Селин',
    title: 'Дама с собачкой',
    tech: 'Акрил, бумага (50х80)',
    price: 16500,
    image: ladyImg,
  },
  {
    id: 3,
    country: 'france',
    author: 'Франсуа Дюпон',
    title: 'Процедура',
    tech: 'Цветная литография (40х60)',
    price: 20000,
    image: procedureImg,
  },
  {
    id: 4,
    country: 'france',
    author: 'Луи Детуш',
    title: 'Роза',
    tech: 'Бумага, акрил (50х80)',
    price: 12000,
    image: roseImg,
  },
  {
    id: 5,
    country: 'france',
    author: 'Франсуа Дюпон',
    title: 'Птичья трапеза',
    tech: 'Цветная литография (40х60)',
    price: 22500,
    image: birdsImg,
  },
  {
    id: 6,
    country: 'france',
    author: 'Пьер Моранж',
    title: 'Пейзаж с рыбой',
    tech: 'Цветная литография (40х60)',
    price: 20000,
    image: fishImg,
  },

  {
    id: 7,
    country: 'germany',
    author: 'Курт Вернер',
    title: 'Над городом',
    tech: 'Цветная литография (40х60)',
    price: 16000,
    image: underTheCity, 
  },
  {
    id: 8,
    country: 'germany',
    author: 'Макс Рихтер',
    title: 'Птенцы',
    tech: 'Холст, масло (50х80)',
    price: 14500,
    image: chicks, 
  },
  {
    id: 9,
    country: 'germany',
    author: 'Мартин Майер',
    title: 'Среди листьев',
    tech: 'Цветная литография (40х60)',
    price: 20000,
    image: amongTheLeaves, 
  },
  {
    id: 10,
    country: 'germany',
    author: 'Герман Беккер',
    title: 'Яркая птица',
    tech: 'Цветная литография (40х60)',
    price: 13000,
    image: brightBird, 
  },
  {
    id: 11,
    country: 'germany',
    author: 'Вульф Бауэр',
    title: 'Дятлы',
    tech: 'Бумага, акрил (50х80)',
    price: 20000,
    image: woodpeckers, 
  },
  {
    id: 12,
    country: 'germany',
    author: 'Вальтер Хартманн',
    title: 'Большие воды',
    tech: 'Бумага, акрил (50х80)',
    price: 23000,
    image: highWaters, 
  },
  {
    id: 13,
    country: 'england',
    author: 'Пол Смит',
    title: 'Дикий зверь',
    tech: 'Акварель, бумага (50x80)',
    price: 19500,
    image: wildBeast, 
  },
   {
    id: 14,
    country: 'england',
    author: 'Джон Уайт',
    title: 'Скалистый берег',
    tech: 'Цветная литография (40х60)',
    price: 17500,
    image: rockyShore,
  },
   {
    id: 15,
    country: 'england',
    author: 'Джим Уотсон',
    title: 'Река и горы',
    tech: 'Акварель, бумага (50х80) ',
    price: 25000,
    image: riversAndMountains, 
  },
   {
    id: 16,
    country: 'england',
    author: 'Юджин Зиллион',
    title: 'Белый попугай',
    tech: 'Цветная литография (40х60)',
    price: 15500,
    image: whiteParrot, 
  },
  {
    id: 17,
    country: 'england',
    author: 'Эрик Гиллман',
    title: 'Ночная рыба',
    tech: 'Бумага, акрил (50х80)',
    price: 12500,
    image: nightFish, 
  },
  {
    id: 18,
    country: 'england',
    author: 'Альфред Барр',
    title: 'Рыжий туман',
    tech: 'Цветная литография (40х60)',
    price: 15000,
    image: redCat, 
  }
];