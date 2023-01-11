import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, RequireAuth } from './authProvider';
import AuthLayout from '../layout/authLayout';
import DashboardLayout from '../layout/dashboardLayout';
import MyTask from '../features/auth/Dashboard/MyTask';
import Inbox from '../features/auth/Inbox';

const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route element={<DashboardLayout></DashboardLayout>}>
                        <Route
                            path="/"
                            element={
                                <RequireAuth>
                                    <MyTask />
                                </RequireAuth>
                            }
                        />
                    </Route>
                    <Route
                        path="/inbox"
                        element={
                            <RequireAuth>
                                <Inbox />
                            </RequireAuth>
                        }
                    />
                </Route>
                {/* <Route element={<GuestLayout />}>
                    <Route
                        path="/registration"
                        element={
                            <RequireAuth>
                                <Registration />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/verification"
                        element={
                            <RequireAuth>
                                <Verification />
                            </RequireAuth>
                        }
                    />
                    <Route path="/redirect" element={<Redirect />} />
                   
                </Route> */}
            </Routes>
        </AuthProvider>
    );
};
export default App;
