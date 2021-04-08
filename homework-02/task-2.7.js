const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

const cardToRemove = 'Карточка-3';
const index = cards.indexOf(cardToRemove);
cards.push('last element');
cards.unshift('first element');
cards.splice(1, 1, 'replace element');
console.table(cards);
