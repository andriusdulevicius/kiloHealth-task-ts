import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { FlexWrapper } from './../../wrappers/Wrapper';
import { primary, lightGray } from './../../../styles/colors';
import { H3 } from './../../texts/Headings';
import { Icon } from './../../icons/Icon';
import { icons } from './../../../utils/icons';

interface IProps {
  plan: {
    id: number;
    contractLength: number;
    monthlyPrice: number;
    discountPercentage: number;
    billPeriod: number;
  };
  checkedPlan: number;
  setCheckedPlan: Dispatch<SetStateAction<number>>;
}

export const PlanCard: React.FC<IProps> = ({
  plan: { id, contractLength, monthlyPrice, discountPercentage, billPeriod },
  checkedPlan,
  setCheckedPlan,
}) => {
  const priceAfterDiscount: number = monthlyPrice - (monthlyPrice * discountPercentage) / 100;

  const fullPeriodPrice: number = monthlyPrice * contractLength;
  const fullPeriodDiscountedPrice: number = +(priceAfterDiscount * contractLength);

  const Card = styled.div`
    height: 6.9rem;
    padding: 1rem;
    border-radius: 1rem;
    border: 0.12rem solid ${checkedPlan === id ? primary : lightGray};

    :hover {
      border-color: ${primary};
    }

    & h4 {
      margin: 0;
    }
    & h4 > span {
      width: 5rem;
      height: 1.25rem;
      border-radius: 0.4rem;
      padding: 0.3rem 0.5rem;
      margin-left: 1rem;
      background-color: var(--primary-light);
      font-size: 0.75rem;
    }
    & h5 {
      font-weight: normal;
      margin-top: 0.7rem;
      margin-bottom: 0;
    }

    & h5 > span {
      text-decoration: ${discountPercentage > 0 ? 'line-through' : ''};
    }
  `;

  return (
    // Setting active program state
    <FlexWrapper flexWrap='nowrap' justifyContent='space-between' alignItems='center'>
      <Card onClick={() => setCheckedPlan(id)}>
        <div>
          <h4>
            {contractLength} month plan
            {discountPercentage > 0 && <span>Save {discountPercentage}%</span>}
          </h4>
          <H3>
            ${discountPercentage > 0 ? priceAfterDiscount.toFixed(2) : monthlyPrice} <small> / month</small>
          </H3>
          {billPeriod === 1 && <h5>Billed monthly</h5>}
          {billPeriod > 1 && (
            <h5>
              <span> {`$${fullPeriodPrice}`}</span>
              {discountPercentage > 0 && (
                <span style={{ color: primary }}>{`$${fullPeriodDiscountedPrice.toFixed(2)} `}</span>
              )}
              billed every {billPeriod} months
            </h5>
          )}
        </div>
        <div>
          <Icon
            width='1.4rem'
            height='1.4rem'
            background={checkedPlan === id ? icons.check_circle_orange : icons.circle}
          ></Icon>
        </div>
      </Card>
    </FlexWrapper>
  );
};
