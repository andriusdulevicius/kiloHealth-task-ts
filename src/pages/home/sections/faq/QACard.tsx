import { FlexWrapper, H3 } from 'components';
import React, { useState } from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.css';
import { lightGray } from 'styles/colors';

interface IProps {
  QA: {
    question: string;
    answer: string;
  };
}

export const QACard: React.FC<IProps> = ({ QA }) => {
  const [answerState, setAnswerState] = useState(false);
  const { question, answer } = QA;

  const answerShowHandler = () => {
    setAnswerState(!answerState);
  };

  return (
    <Card answerState={answerState} onClick={answerShowHandler}>
      <FlexWrapper justifyContent='space-between' flexWrap='no-wrap'>
        <H3>{question}</H3>
        <i className={!answerState ? 'fa fa-angle-down' : 'fa fa-angle-up'}></i>
      </FlexWrapper>
      {/* dynamic answer reveal */}
      <p>{answer}</p>
    </Card>
  );
};

const Card = styled.div<{ answerState: boolean }>`
  border: 0.06rem solid ${lightGray};
  border-radius: 1rem;
  padding: 0.7rem;
  margin: 1rem 0;
  min-height: 4.4rem;
  transition: all 1s ease;

  & i {
    font-size: 1.6rem;
  }

  & p {
    padding: 0.7rem;
    max-height: ${({ answerState }) => (answerState ? '40rem' : 0)};
    opacity: ${({ answerState }) => (answerState ? 1 : 0)};
    overflow: ${({ answerState }) => (answerState ? 'visible' : 'hidden')};
    transition: all 1s ease;
  }
`;
