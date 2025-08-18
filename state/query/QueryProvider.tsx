'use client'

import { ReactChildren } from '@/types/types';
import { QueryClient, QueryClientProvider } from 'react-query';

const QueryProvider = ({ children }: ReactChildren) => {
  const client = new QueryClient();
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
