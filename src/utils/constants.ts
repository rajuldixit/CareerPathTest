export const HeroBannerHeading = 'Career path test'
export const HeroBannerSubHeading = 'Discover careers that match your skills and personality'

export enum CARD_KEYS {
   QUEST = 'QUEST', 
   INSIGHT = 'INSIGHT', 
   ADVICE = 'ADVICE'
}

export const InfoQuestionCard = {
    id: CARD_KEYS.QUEST,
    title: '24 Questions',
    description: 'Answer 24 questions about your working style and career preferences.',
    icon: 'https://fhc-frontend.onrender.com/assets/clipboard-question.svg' 
}
export const InfoInsightCard = {
    id: CARD_KEYS.INSIGHT,
    title: '2 minutes',
    description: 'Gain insights into your future career in just two minutes.',
    icon: 'https://fhc-frontend.onrender.com/assets/stopwatch.svg' 
}
export const InfoAdviceCard = {
    id: CARD_KEYS.ADVICE,
    title: 'Personalised advice',
    description: 'Receive personalised advice to guide you into your next steps.',
    icon: 'https://fhc-frontend.onrender.com/assets/scissor-cutting.svg' 
}
export const QuestionnaireInfoText = {
    first: `We've analysed data from thousands of our members who work in graduate roles across a range
     of sectors to understand which personalities, skills and values best fit each career path.`,
    second: 'Take this test to understand what career path you might be suited to and how to get started.'
}

export const ResultAckMessage = 'Well done on completing your test. You can view the results now.'