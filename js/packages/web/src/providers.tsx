import {
  AccountsProvider,
  ConnectionProvider,
  StoreProvider,
  WalletProvider,
  MetaProvider,
} from '@oyster/common';
import React, { FC } from 'react';
import { ConfettiProvider } from './components/Confetti';
import { AppLayout } from './components/Layout';
import { LoaderProvider } from './components/Loader';
import { CoingeckoProvider } from './contexts/coingecko';
import { QueryParamProvider } from 'use-query-params';
import { Route } from 'react-router-dom';
import { ApeProvider } from './contexts';
import { SPLTokenListProvider } from './contexts/tokenList';

export const Providers: FC = ({ children }) => {
  return (
    <ConnectionProvider>
      <WalletProvider>
        <AccountsProvider>
          <SPLTokenListProvider>
            <CoingeckoProvider>
              <QueryParamProvider ReactRouterRoute={Route}>
                <ApeProvider>
                  <StoreProvider
                    ownerAddress={process.env.NEXT_PUBLIC_STORE_OWNER_ADDRESS}
                    storeAddress={process.env.NEXT_PUBLIC_STORE_ADDRESS}
                  >
                    <MetaProvider>
                      <LoaderProvider>
                        <ConfettiProvider>
                          <AppLayout>{children}</AppLayout>
                        </ConfettiProvider>
                      </LoaderProvider>
                    </MetaProvider>
                  </StoreProvider>
                </ApeProvider>
              </QueryParamProvider>
            </CoingeckoProvider>
          </SPLTokenListProvider>
        </AccountsProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
