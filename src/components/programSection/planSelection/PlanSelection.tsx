import React, { useState } from 'react';
import styled from 'styled-components';
import { PlanCard } from './PlanCard';
import { images } from 'utils/images';
import { H2, Button, SmallText, Image } from 'components';
import { primary } from 'styles/colors';

export const PlanSelection: React.FC = () => {
  const [checkedPlan, setCheckedPlan] = useState<number>(0);
  // sample data
  const membershipPlans = [
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

  return (
    <PlansSection>
      <H2>
        Choose your plan and get <span>7 days free trial</span>
      </H2>
      {membershipPlans.map((onePlan) => (
        <PlanCard plan={onePlan} key={onePlan.id} checkedPlan={checkedPlan} setCheckedPlan={setCheckedPlan} />
      ))}
      <Button>Get your plan</Button>
      <div>
        <SmallText>
          Your free trial will automatically become a paid subscription on the 8th day after you begin your trial. to
          cancel your subscription, please contact us at least 24 hours before the end of the trial period.
        </SmallText>
        <SmallText>
          By choosing a payment method you agree to the <a href='/'>T&amp;Cs</a> and <a href='/'>Privacy Policy</a>
        </SmallText>
        <Image src={images.safe_checkout} />
      </div>
    </PlansSection>
  );
};

const PlansSection = styled.div`
  & span {
    color: ${primary};
  }
  & div {
    text-align: center;
  }
`;
