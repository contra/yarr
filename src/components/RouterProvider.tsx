import type { ReactNode } from 'react';
import React from 'react';
import { RouterContext } from '../context/RouterContext';
import type { CreateRouterContext } from '../types';

export interface RouterProviderProps {
  children: ReactNode;
  router: CreateRouterContext;
}

export const RouterProvider = ({ children, router }: RouterProviderProps) => {
  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  );
};