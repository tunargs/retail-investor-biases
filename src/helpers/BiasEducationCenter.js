import anchoringBiasItems from '../img/anchoring-bias-items.png';

export const BiasEducationCenter = [
  {
    bias: 'Anchoring Bias',
    description:
      'Anchoring bias indicates that an investor makes decisions based on the initial information or relies too much on a single piece of information that he/she obtained.',
    warning:
      'Please, make sure you understand what this bias means, you will be needing this moving forward.',
    instruction:
      'For this test you will use E and I to categorize items as fast as you can.',
    categoriesAndItems: anchoringBiasItems,
    questions: [
      {
        prompt:
          'Current price of Google is below the 52-week high, but this information alone is not enough to decide if this is a good deal right now.',
        A: 'Anchoring Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Since Google`s stock has offered great returns in it`s history, it will continue doing so.',
        A: 'Anchoring Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'Diamond Hands.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'Paper Hands.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Current price of Google is below the 52-week high, but this information alone is not enough to decide if this is a good deal right now.',
        A: 'Anchoring Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Since the current price of Google is below the 52-week high, it is a good deal right now.',
        A: 'Anchoring Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Current price of Google is below 52-week high, but this information alone is not enough to decide if this is a good deal right now.',
        A: 'Anchoring Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Since the current price of Google is below the 52-week high, it is a good deal right now.',
        A: 'Anchoring Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
    ],
  },
];
