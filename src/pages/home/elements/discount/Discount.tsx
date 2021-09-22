import React from 'react';
import Countdown from 'react-countdown';
import styled from 'styled-components';
import { white, lightBlue } from 'styles/colors';
import { icons } from 'utils/icons';
import { RegularText, FlexWrapper, BoldedSpan, Svg } from 'components';

export const Discount = () => {
  const CompletionList = () => <span style={{ color: 'red' }}>No longer valid!</span>;

  return (
    <DiscountSection>
      <FlexWrapper flexWrap='no-wrap' padding='1rem 0'>
        <Svg src='badge' />
        <RegularText color={white}>
          50% discount only valid for
          <BoldedSpan>
            <Countdown date={Date.now() + 1000000}>
              <CompletionList />
            </Countdown>
          </BoldedSpan>
        </RegularText>
      </FlexWrapper>
    </DiscountSection>
  );
};

const DiscountSection = styled.div`
  color: ${white};
  background-color: ${lightBlue};
  & span {
    margin: 0 0.5rem;
  }
`;
