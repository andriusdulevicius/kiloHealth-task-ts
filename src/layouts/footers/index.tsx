import React from 'react';
import { Router } from '@reach/router';

import { Route } from 'components';

import { Footer } from './Footer';

export const Footers: React.FC = () => <Router primary={false}>{Route('/home/', Footer)}</Router>;
