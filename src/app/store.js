import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
import { candidates } from './actions/candidates';
import { jobApi } from './actions/jobApi';
import { profileAuth } from './actions/profile';
import { userAuth } from './actions/userAuth';
import { walletApi } from './actions/walletApi';

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [userAuth.reducerPath]: userAuth.reducer,
        [profileAuth.reducerPath]: profileAuth.reducer,
        [jobApi.reducerPath]: jobApi.reducer,
        [candidates.reducerPath]: candidates.reducer,
        [walletApi.reducerPath]: walletApi.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userAuth.middleware,
            profileAuth.middleware,
            jobApi.middleware,
            candidates.middleware,
            walletApi.middleware
        )
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
