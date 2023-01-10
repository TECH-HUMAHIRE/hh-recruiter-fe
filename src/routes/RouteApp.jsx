import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, RequireAuth } from './authProvider';
import AuthLayout from '../layout/authLayout';
import DashboardLayout from '../layout/dashboardLayout';

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
                                    <div>Dashboard</div>
                                </RequireAuth>
                            }
                        />
                    </Route>
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
