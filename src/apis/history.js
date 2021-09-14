import { navigate } from 'gatsby';

export const useRouter = () => {
  return {
    goToLanding: () => {
      navigate('/');
    },
    goToCheckout: () => {
      navigate('/checkout');
    },
    goBack: () => {
      navigate(-1);
    },
  };
};
