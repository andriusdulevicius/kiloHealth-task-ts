import React, { useState } from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.css';
import { FlexWrapper, RegularText, H4 } from 'components';
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
      <FlexWrapper justifyContent='space-between' flexWrap='no-wrap' padding='0'>
        <H4 fontWeight={600}>{question}</H4>
        <i className={!answerState ? 'fa fa-angle-down' : 'fa fa-angle-up'}></i>
      </FlexWrapper>
      <RegularText margin='0' textAlign='left'>
        {answer}
      </RegularText>
    </Card>
  );
};

const Card = styled.div<{ answerState: boolean }>`
  margin: 1rem auto;
  padding: 1rem;
  max-height: ${({ answerState }) => (answerState ? '40rem' : '4rem')};
  max-width: 50rem;
  border: 0.06rem solid ${lightGray};
  border-radius: 1rem;
  transition: all 1s ease;

  & i {
    font-size: 1.6rem;
  }

  & p {
    opacity: ${({ answerState }) => (answerState ? 1 : 0)};
    overflow: ${({ answerState }) => (answerState ? 'visible' : 'hidden')};
    transition: all 1s ease;
  }
`;
