import React from 'react';
import styled from 'styled-components';
import { white } from 'styles/colors';
import { icons } from 'utils/icons';
import Countdown from 'react-countdown';
import { Icon } from '../../components/icons/Icon';

export const Discount = () => {
  const CompletionList = () => <span style={{ color: 'red' }}>No longer valid!</span>;

  return (
    <DiscountPopup>
      <Icon display='inline-block' background={icons.badge} width='1.3rem' height='1.3rem' />
      <span>
        50% discount only valid for
        <strong>
          <Countdown date={Date.now() + 1000000}>
            <CompletionList />
          </Countdown>
        </strong>
      </span>
    </DiscountPopup>
  );
};

const DiscountPopup = styled.div`
  padding: 0.8rem 0;
  text-align: center;
  font-size: 1rem;
  color: ${white};
  background-color: rgba(104, 200, 245, 0.671);

  & span {
    margin: 0 0.5rem;
  }
`;
