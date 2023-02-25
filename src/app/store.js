import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
import { jobApi } from './actions/jobApi';
import { profileAuth } from './actions/profile';
import { userAuth } from './actions/userAuth';

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [userAuth.reducerPath]: userAuth.reducer,
        [profileAuth.reducerPath]: profileAuth.reducer,
        [jobApi.reducerPath]: jobApi.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userAuth.middleware,
            profileAuth.middleware,
            jobApi.middleware
        )
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
