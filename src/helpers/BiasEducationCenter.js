import representativenessBiasTable from '../img/representativeness-bias-table.png';
import anchoringBiasTable from '../img/anchoring-bias-table.png';
import overconfidenceBiasTable from '../img/overconfidence-bias-table.png';
import herdingBiasTable from '../img/herding-bias-table.png';
import dispositionEffectTable from '../img/disposition-effect-table.png';
import actionBiasTable from '../img/action-bias-table.png';

export const BiasEducationCenter = [
  {
    bias: 'Bias #1: Representativeness Heuristic Bias',
    description:
      'The representativeness bias describes the event in which people might confuse the probabilities of two things or events to be more correlated than they actually are. In the world of investment, this can take the form of investors making decisions based on their previous experiences, often wrongly judging that something is more representative than it actually is.',
    warning:
      'Please, make sure you understand what this bias means, you will be needing this moving forward.',
    instruction:
      'For this test you will use E and I to categorize items as fast as you can.',
    categoriesAndItems: representativenessBiasTable,
    questions: [
      {
        prompt:
          'Since Google`s stock has offered great returns in the past, it will continue doing so.',
        A: 'Representativeness Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Amazon`s stock has offered  great returns in the past, but it might not offer the same returns in the future.',
        A: 'Representativeness Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Cryptocurrencies are bound to crash someday, just like the Bitcoin crashed in 2017.',
        A: 'Representativeness Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Many of Chamath`s SPACs have performed well in the past, but all of them might continue doing so in the future.',
        A: 'Representativeness Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'The stock market crashes every 10 years, therefore a widespread crash is due now.',
        A: 'Representativeness Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Tesla`s stock just crashed, but it might not go back up again soon as it did previously.',
        A: 'Representativeness Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'To the moon.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'Crash.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
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
        prompt: 'Long.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'Short.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Since Google`s stock has offered great returns in the past, it will continue doing so.',
        A: 'Representative Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Amazon`s stock has offered great returns in the past, but it might not offer the same returns in the future.',
        A: 'Representative Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Since Google`s stock has offered great returns in the past, it will continue doing so.',
        A: 'Representative Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Cryptocurrencies are bound to crash someday, just like the Bitcoin crashed in 2017.',
        A: 'Representative Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'The stock market crashes every 10 years, therefore a widespread crash is due now.',
        A: 'Representative Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Tesla`s stock just crashed, but it might not go back up again soon as it did previously.',
        A: 'Representative Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Since Google`s stock has offered great returns in the past, it will continue doing so.',
        A: 'Representative Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Amazon`s stock has offered great returns in the past, but it might not offer the same returns in the future.',
        A: 'Representative Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Cryptocurrencies are bound to crash someday, just like the Bitcoin crashed in 2017.',
        A: 'Representative Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Many of Chamath`s SPACs have performed well in the past, but all of them might continue doing so in the future.',
        A: 'Representative Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'The stock market crashes every 10 years, therefore a widespread crash is due now.',
        A: 'Representative Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Tesla`s stock just crashed, but it might not go back up again soon as it did previously.',
        A: 'Representative Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
    ],
  },
  {
    bias: 'Bias #2: Anchoring Bias',
    description:
      'Anchoring bias is a cognitive bias that causes us to rely too heavily on the first piece of information we are given about a topic. When we are setting plans or making estimates about something, we interpret newer information from the reference point of our anchor, instead of seeing it objectively. In the world of investment, this can take the form of investors skewing their judgement based on their point of anchor, thereby failing to update plans or predictions as much as they should.',
    warning:
      'Please, make sure you understand what this bias means, you will be needing this moving forward.',
    instruction:
      'For this test you will use E and I to categorize items as fast as you can.',
    categoriesAndItems: anchoringBiasTable,
    questions: [
      {
        prompt:
          'Since the current price of Google is below the 52-week high, it is a good deal right now.',
        A: 'Anchoring Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Amazon is currently below the 52-week high, but that alone does not make it a good stock.',
        A: 'Anchoring Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My Ark ETF has underperformed S&P 100 in the last quarter, therefore I should sell it.',
        A: 'Anchoring Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My ETF has underperformed S&P 100 in the last quarter, however that alone is not a reason to sell it.',
        A: 'Anchoring Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'BMW`s current price is €85, and Volkswagen stock is €150, therefore I should buy BMW.',
        A: 'Anchoring Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Twitter`s current price is €45, and Facebook`s is €300, however that alone is not a reason to buy Twitter.',
        A: 'Anchoring Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'To the moon.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'Crash.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'Diamond hands.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'Paper hands.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'Long.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'Short.',
        A: 'Buy',
        B: 'Sell',
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
          'Amazon is currently below the 52-week high, but that alone does not make it a good stock.',
        A: 'Anchoring Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My Ark ETF has underperformed S&P 100 in the last quarter, therefore I should sell it.',
        A: 'Anchoring Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My ETF has underperformed S&P 100 in the last quarter, however that alone is not a reason to sell it.',
        A: 'Anchoring Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'BMW`s current price is €85, and Volkswagen stock is €150, therefore I should buy BMW.',
        A: 'Anchoring Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Twitter`s current price is €45, and Facebook`s is €300, however that alone is not a reason to buy Twitter.',
        A: 'Anchoring Bias & Sell',
        B: 'Not a Bias & Buy',
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
      {
        prompt:
          'Amazon is currently below the 52-week high, but that alone does not make it a good stock.',
        A: 'Anchoring Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My Ark ETF has underperformed S&P 100 in the last quarter, therefore I should sell it.',
        A: 'Anchoring Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My ETF has underperformed S&P 100 in the last quarter, however that alone is not a reason to sell it.',
        A: 'Anchoring Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'BMW`s current price is €85, and Volkswagen stock is €150, therefore I should buy BMW.',
        A: 'Anchoring Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Twitter`s current price is €45, and Facebook`s is €300, however that alone is not a reason to buy Twitter.',
        A: 'Anchoring Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
    ],
  },
  {
    bias: 'Bias #3: Overconfidence Bias',
    description:
      'The overconfidence bias refers to our belief or perception in our abilities to be higher than our `actual` or realized abilities. Investors with overconfidence bias often tend to believe that "they can pick the next big stock". This often results in ill-advised attempts to time the market or build concentrations in risky investments they consider a sure thing.',
    warning:
      'Please, make sure you understand what this bias means, you will be needing this moving forward.',
    instruction:
      'For this test you will use E and I to categorize items as fast as you can.',
    categoriesAndItems: overconfidenceBiasTable,
    questions: [
      {
        prompt:
          'Since I invested in Amazon at it`s start, I have a high probability of identifying the next big company as well.',
        A: 'Overconfidence Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I am an ill-informed investor, therefore I am better off buying a single index fund than investing in individual stocks myself.',
        A: 'Overconfidence Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'The S&P 500 Index averages about 6.6% a year, but I personally can perform way better than that.',
        A: 'Overconfidence Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I have made great returns in the past, but that was not based upon my own capabilities only',
        A: 'Overconfidence Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I have lost money on all my crypto investments, but I think I make decent investment decisions.',
        A: 'Overconfidence Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I identified great web 2.0 stocks, but that does not mean I could do the same in the web 3.0 space.',
        A: 'Overconfidence Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'To the moon.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'Crash.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
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
        prompt: 'Long.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'Short.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Since I invested in Amazon at it`s start, I have a high probability of identifying the next big company as well.',
        A: 'Overconfidence Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I am an ill-informed investor, therefore I am better off buying a single index fund than investing in individual stocks myself.',
        A: 'Overconfidence Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'The S&P 500 Index averages about 6.6% a year, but I personally can perform way better than that.',
        A: 'Overconfidence Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I have made great returns in the past, but that was not based upon my own capabilities only.',
        A: 'Overconfidence Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I have lost money on all my crypto investments, but I think I make decent investment decisions.',
        A: 'Overconfidence Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I identified great web 2.0 stocks, but that does not mean I could do the same in the web 3.0 space.',
        A: 'Overconfidence Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Since I invested in Amazon at it`s start, I have a high probability of identifying the next big company as well.',
        A: 'Overconfidence Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I am an ill-informed investor, therefore I am better off buying a single index fund than investing in individual stocks myself.',
        A: 'Overconfidence Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'The S&P 500 Index averages about 6.6% a year, but I personally can perform way better than that.',
        A: 'Overconfidence Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I have made great returns in the past, but that was not based upon my own capabilities only.',
        A: 'Overconfidence Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I have lost money on all my crypto investments, but I think I make decent investment decisions.',
        A: 'Overconfidence Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I identified great web 2.0 stocks, but that does not mean I could do the same in the web 3.0 space.',
        A: 'Overconfidence Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
    ],
  },
  {
    bias: 'Bias #4: Herding Bias / Bandwagon effect',
    description:
      'The Bandwagon effect refers to our habit of adopting certain behaviors or beliefs because many other people do the same. In the world of investment, this can take the form of investors rationalizing that their course of action is the right one because "everybody else" is doing it.',
    warning:
      'Please, make sure you understand what this bias means, you will be needing this moving forward.',
    instruction:
      'For this test you will use E and I to categorize items as fast as you can.',
    categoriesAndItems: herdingBiasTable,
    questions: [
      {
        prompt:
          'People from my country believe that Wirecard, a local startup is primed to become a “global player”, therefore I should invest in it.',
        A: 'Herding Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My friends think Tesla is the best stock ever,  but I will not invest in it unless I am convinced about it myself.',
        A: 'Herding Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Everybody around me seems to be investing in the cryptocurrency Solana, therefore I should too.',
        A: 'Herding Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Everybody seems to be investing Bitcoin, but I would not until I understand what it is, and how it works.',
        A: 'Herding Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I personally cannot make sense out of Chamath`s IPOs, but since the entire reddit army is buying it, I should buy it too.',
        A: 'Herding Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'The reddit army is aiming to take GameStop to the moon, but I am wary of letting FOMO drive my decisions.',
        A: 'Herding Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'To the moon.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'Crash.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
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
        prompt: 'Long.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'Short.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'People from my country believe that Wirecard, a local startup is primed to become a “global player”, therefore I should invest in it.',
        A: 'Herding Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My friends think Tesla is the best stock ever,  but I will not invest in it unless I am convinced about it myself.',
        A: 'Herding Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Everybody around me seems to be investing in the cryptocurrency Solana, therefore I should too.',
        A: 'Herding Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Everybody seems to be investing Bitcoin, but I would not until I understand what it is, and how it works.',
        A: 'Herding Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I personally cannot make sense out of Chamath`s IPOs, but since the entire reddit army is buying it, I should buy it too.',
        A: 'Herding Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'The reddit army is aiming to take GameStop to the moon, but I am wary of letting FOMO drive my decisions.',
        A: 'Herding Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },

      {
        prompt:
          'People from my country believe that Wirecard, a local startup is primed to become a “global player”, therefore I should invest in it.',
        A: 'Herding Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My friends think Tesla is the best stock ever,  but I will not invest in it unless I am convinced about it myself.',
        A: 'Herding Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Everybody around me seems to be investing in the cryptocurrency Solana, therefore I should too.',
        A: 'Herding Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Everybody seems to be investing Bitcoin, but I would not until I understand what it is, and how it works.',
        A: 'Herding Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I personally cannot make sense out of Chamath`s IPOs, but since the entire reddit army is buying it, I should buy it too.',
        A: 'Herding Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'The reddit army is aiming to take GameStop to the moon, but I am wary of letting FOMO drive my decisions.',
        A: 'Herding Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
    ],
  },
  {
    bias: 'Bias #5: Disposition effect',
    description:
      'The disposition effect refers to our tendency to prematurely sell assets that have made financial gains while holding on to assets that are losing money. While investing, this can take the form of selling winning investments in order to ensure a profit, but being averse to selling losing investments in hopes of turning them into gains.',
    warning:
      'Please, make sure you understand what this bias means, you will be needing this moving forward.',
    instruction:
      'For this test you will use E and I to categorize items as fast as you can.',
    categoriesAndItems: dispositionEffectTable,
    questions: [
      {
        prompt:
          'My Bitcoin just hit $60,000. I should sell it before it goes down again.',
        A: 'Disposition Effect',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Wirecard`s stock price is going down because of a fraud scandal, and I should sell it off without losing any more money.',
        A: 'Disposition Effect',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I am losing money on my Wirecard stock due to an accused scandal, but I would not sell it until I recover my losses.',
        A: 'Disposition Effect',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I have lost quite a lot of money on my Docusign stock in the past 6 months and future prospects do not look well, therefore I would sell it.',
        A: 'Disposition Effect',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My Tesla stock just hit $1,000. I should sell it before Elon Musk tweets "Tesla stock price is too high in my opinion".',
        A: 'Disposition Effect',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My tesla stock has made over 300%, and the stock looks a bit overvalued, but I would continue betting on my winners.',
        A: 'Disposition Effect',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'To the moon.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'Crash.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
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
        prompt: 'Long.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'Short.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My Bitcoin just hit $60,000. I should sell it before it goes down again.',
        A: 'Disposition Effect & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Wirecard`s stock price is going down because of a fraud scandal, and I should sell it off without losing any more money.',
        A: 'Disposition Effect & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I am losing money on my Wirecard stock due to an accused scandal, but I would not sell it until I recover my losses.',
        A: 'Disposition Effect & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I have lost quite a lot of money on my Docusign stock in the past 6 months and future prospects do not look well, therefore I would sell it.',
        A: 'Disposition Effect & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My Tesla stock just hit $1,000. I should sell it before Elon Musk tweets "Tesla stock price is too high in my opinion".',
        A: 'Disposition Effect & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My tesla stock has made over 300%, and the stock looks a bit overvalued, but I would continue betting on my winners.',
        A: 'Disposition Effect & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },

      {
        prompt:
          'My Bitcoin just hit $60,000. I should sell it before it goes down again.',
        A: 'Disposition Effect & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Wirecard`s stock price is going down because of a fraud scandal, and I should sell it off without losing any more money.',
        A: 'Disposition Effect & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I am losing money on my Wirecard stock due to an accused scandal, but I would not sell it until I recover my losses.',
        A: 'Disposition Effect & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I have lost quite a lot of money on my Docusign stock in the past 6 months and future prospects do not look well, therefore I would sell it.',
        A: 'Disposition Effect & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My Tesla stock just hit $1,000. I should sell it before Elon Musk tweets "Tesla stock price is too high in my opinion".',
        A: 'Disposition Effect & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My tesla stock has made over 300%, and the stock looks a bit overvalued, but I would continue betting on my winners.',
        A: 'Disposition Effect & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
    ],
  },
  {
    bias: 'Bias #6: Action Bias',
    description:
      'The action bias describes our tendency to favour action over inaction, often to our benefit. However, there are times when we feel compelled to act, even if there’s evidence that it will lead to a worse outcome than doing nothing would. In the world of investment, this can take the form of "investors panic selling when the market is going down or hastily investing after reading something positive about an asset online".',
    warning:
      'Please, make sure you understand what this bias means, you will be needing this moving forward.',
    instruction:
      'For this test you will use E and I to categorize items as fast as you can.',
    categoriesAndItems: actionBiasTable,
    questions: [
      {
        prompt:
          'My Bitcoin just went down $1,000; therefore I should sell it before I lose any more money.',
        A: 'Action Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My Bitcoin just went down $1,000; but I know Cryptocurrencies are highly volatile assets, and I should not be worried.',
        A: 'Action Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Various instagram account have been hinting towards a dip at the end of the week, therefore I should sell my stocks right now.',
        A: 'Action Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'There is market-wide sell off. By default, I should do nothing. Baking cookies might be a great idea at the moment.',
        A: 'Action Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'A market-wide sell off just started, and I feel this is a perfect opportunity to buy my favorite stocks at discount.',
        A: 'Action Bias',
        B: 'Not a Bias',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I am down around 20% over the past weeks. Should I be doing something about it? No. I am in for the long run, and time smooths out all volatility.',
        A: 'Action Bias',
        B: 'Not a Bias',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'To the moon.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'Crash.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
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
        prompt: 'Long.',
        A: 'Buy',
        B: 'Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt: 'Short.',
        A: 'Buy',
        B: 'Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },

      {
        prompt:
          'My Bitcoin just went down $1,000; therefore I should sell it before I lose any more money.',
        A: 'Action Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My Bitcoin just went down $1,000; but I know Cryptocurrencies are highly volatile assets, and I should not be worried.',
        A: 'Action Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Various instagram account have been hinting towards a dip at the end of the week, therefore I should sell my stocks right now.',
        A: 'Action Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'There is market-wide sell off. By default, I should do nothing. Baking cookies might be a great idea at the moment.',
        A: 'Action Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'A market-wide sell off just started, and I feel this is a perfect opportunity to buy my favorite stocks at discount.',
        A: 'Action Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I am down around 20% over the past weeks. Should I be doing something about it? No. I am in for the long run, and time smooths out all volatility.',
        A: 'Action Bias & Sell',
        B: 'Not a Bias & Buy',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },

      {
        prompt:
          'My Bitcoin just went down $1,000; therefore I should sell it before I lose any more money.',
        A: 'Action Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'My Bitcoin just went down $1,000; but I know Cryptocurrencies are highly volatile assets, and I should not be worried.',
        A: 'Action Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'Various instagram account have been hinting towards a dip at the end of the week, therefore I should sell my stocks right now.',
        A: 'Action Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'There is market-wide sell off. By default, I should do nothing. Baking cookies might be a great idea at the moment.',
        A: 'Action Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'A market-wide sell off just started, and I feel this is a perfect opportunity to buy my favorite stocks at discount.',
        A: 'Action Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'A',
        userSelection: '',
        timeSpent: 0,
      },
      {
        prompt:
          'I am down around 20% over the past weeks. Should I be doing something about it? No. I am in for the long run, and time smooths out all volatility.',
        A: 'Action Bias & Buy',
        B: 'Not a Bias & Sell',
        answer: 'B',
        userSelection: '',
        timeSpent: 0,
      },
    ],
  },
];
