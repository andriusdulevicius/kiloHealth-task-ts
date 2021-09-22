import React from 'react';
import { Router } from '@reach/router';
import { Route } from 'components';
import { BannerDiscount } from './BannerDiscount';

export const Banners: React.FC = () => <Router>{Route('/', BannerDiscount)} </Router>;
