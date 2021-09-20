import React from 'react';
import { Button, Container, H3 } from 'components';
import { QACard } from './QACard';
import { useQuery } from 'styles/breakpoints';

const QUESTIONS_ANSWERS = [
  {
    id: 'q1',
    question: 'What happens after I order?',
    answer:
      'After you place your order, we get to work! Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve.',
  },
  {
    id: 'q2',
    question: 'Where I can access my plan?',
    answer: 'Your plan will be accessible in Positive Yogas web app with a special link generated after your purchase.',
  },
  {
    id: 'q3',
    question: 'How can I cancel my subscription?',
    answer: 'You can manage or cancel your subscription by writing our customer support hello@positiveyoga.app',
  },
  {
    id: 'q4',
    question: 'Why this program is paid?',
    answer:
      'We are aiming to offer our clients the best experience, which comes with a lot of work.  The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback! ',
  },
];
export const Faq: React.FC = () => {
  const { isLaptop } = useQuery();

  return (
    <Container maxWidth='50rem' padding='0'>
      <H3 fontWeight={700}>Frequently Asked Questions</H3>
      <Container padding='0'>
        {QUESTIONS_ANSWERS.map((QAObj) => (
          <QACard QA={QAObj} key={QAObj.id} />
        ))}
      </Container>
      <Button width={!isLaptop ? '26rem' : '100%'} margin={isLaptop ? '0rem' : '2rem 0'}>
        Get my plan
      </Button>
    </Container>
  );
};
