import React from 'react';
import { Router } from '@reach/router';
import { Route } from 'components';
import { Navigation } from './Navigation';

export const Navigations: React.FC = () => <Router>{Route('/', Navigation)} </Router>;
