import React, { useState } from 'react';
import styled from 'styled-components';
import { PlanCard } from './PlanCard';
import { H3, Button, SmallText, Image, Container } from 'components';
import { primary } from 'styles/colors';

// sample data
const MEMBERSHIP_PLANS = [
  {
    id: 1,
    contractLength: 6,
    monthlyPrice: 19.98,
    discountPercentage: 50,
    billPeriod: 6,
  },
  {
    id: 2,
    contractLength: 3,
    monthlyPrice: 19.99,
    discountPercentage: 25,
    billPeriod: 3,
  },
  {
    id: 3,
    contractLength: 1,
    monthlyPrice: 19.99,
    discountPercentage: 0,
    billPeriod: 1,
  },
];
export const PlanSelection: React.FC = () => {
  const [checkedPlan, setCheckedPlan] = useState<number>(0);

  return (
    <PlansSection>
      <H3 fontWeight={700}>
        Choose your plan and get <Highlight>7 days free trial</Highlight>
      </H3>
      {MEMBERSHIP_PLANS.map((onePlan) => (
        <PlanCard plan={onePlan} key={onePlan.id} checkedPlan={checkedPlan} setCheckedPlan={setCheckedPlan} />
      ))}
      <Button width='100%' margin='1rem 0'>
        Get your plan
      </Button>
      <Container>
        <SmallText textAlign='center'>
          Your free trial will automatically become a paid subscription on the 8th day after you begin your trial. to
          cancel your subscription, please contact us at least 24 hours before the end of the trial period.
        </SmallText>
        <SmallText textAlign='center'>
          By choosing a payment method you agree to the <a href='/'>T&amp;Cs</a> and <a href='/'>Privacy Policy</a>
        </SmallText>
        <Image src='safe_checkout' />
      </Container>
    </PlansSection>
  );
};

const PlansSection = styled.div`
  max-width: 25rem;
  & img {
    margin-top: 2rem;
  }
`;

const Highlight = styled.span`
  color: ${primary};
`;
