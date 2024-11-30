'use client';  // This makes the component client-side only

import { store } from '@/lib/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMemo } from 'react';
import { Provider } from 'react-redux';

export default function ReactQueryProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    // Memoizing the QueryClient to avoid re-creating it on every render
    const queryClient = useMemo(() => new QueryClient(), []);  // Setting up React Query Client

    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                {children} {/* All children will have React Query available */}
            </QueryClientProvider>
        </Provider>
    );
}