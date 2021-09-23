import React from 'react';
import { Router } from '@reach/router';

import { Route } from 'components';

import { Navigation } from './Navigation';

export const Navigations: React.FC = () => <Router primary={false}>{Route('/home/', Navigation)}</Router>;
