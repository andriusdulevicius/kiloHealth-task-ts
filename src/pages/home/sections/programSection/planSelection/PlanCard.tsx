import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { FlexWrapper, Icon, Container, H2, H4, SmallText } from 'components';
import { icons } from 'utils/icons';
import { primary, lightGray, black, lightYellow, white } from 'styles/colors';

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

  return (
    <Card checkedPlan={checkedPlan} planId={id} onClick={() => setCheckedPlan(id)}>
      <FlexWrapper flexWrap='nowrap' justifyContent='space-between' alignItems='center' margin='0rem' padding='0'>
        <Container margin='0' padding='0'>
          <H4 fontWeight={600} margin='0'>
            {contractLength} month plan
            {discountPercentage > 0 && <DiscountBadge>Save {discountPercentage}%</DiscountBadge>}
          </H4>
          <FlexWrapper padding='0' justifyContent='start' alignItems='flex-start'>
            <H2 fontWeight={700} margin='0'>
              ${discountPercentage > 0 ? priceAfterDiscount.toFixed(2) : monthlyPrice}
            </H2>
            <SmallText> / month</SmallText>
          </FlexWrapper>
          {billPeriod === 1 && <SmallText margin='0'>Billed monthly</SmallText>}
          {billPeriod > 1 && (
            <SmallText margin='0'>
              <FullPrice discountPercentage={discountPercentage}> {`$${fullPeriodPrice}`}</FullPrice>
              {discountPercentage > 0 && (
                <DiscountedPrice>{`$${fullPeriodDiscountedPrice.toFixed(2)} `}</DiscountedPrice>
              )}
              billed every {billPeriod} months
            </SmallText>
          )}
        </Container>
        <Container margin='0' padding='0'>
          <Icon
            display='inline-block'
            width='1.4rem'
            height='1.4rem'
            background={checkedPlan === id ? icons.check_circle_orange : icons.circle}
          ></Icon>
        </Container>
      </FlexWrapper>
    </Card>
  );
};

const Card = styled.div<{ checkedPlan: number; planId: number }>`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  border: 0.2rem solid ${({ checkedPlan, planId }) => (checkedPlan === planId ? primary : lightGray)};

  :hover {
    border-color: ${primary};
  }
`;

const DiscountBadge = styled.span`
  margin-left: 1rem;
  padding: 0.3rem 0.5rem;
  width: 5rem;
  height: 1.25rem;
  border-radius: 0.4rem;
  background-color: ${lightYellow};
  color: ${black};
  font-size: 0.75rem;
  font-weight: 700;
`;

const FullPrice = styled.span<{ discountPercentage: number }>`
  text-decoration: ${({ discountPercentage }) => (discountPercentage > 0 ? 'line-through' : '')};
  color: ${black};
  margin-right: 0.3rem;
`;

const DiscountedPrice = styled.span`
  color: ${primary};
`;
