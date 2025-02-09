const { shuffleArray, cards } = require('./homepage_shuffle.js');

describe('Shuffle Cards Test', () => {
  test('Cards are shuffled randomly', () => {
    
    const shuffledCards = shuffleArray(cards);

    expect(shuffledCards.length).toEqual(cards.length);

    cards.forEach(card => {
      expect(shuffledCards).toContainEqual(card);
    });
  });
});
