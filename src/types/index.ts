export interface ICard {
  id: number;
  country: 'france' | 'germany' | 'england';
  author: string;
  title: string;
  tech: string; 
  price: number; 
  image: string; 
}