import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, RequireAuth } from './authProvider';
import AuthLayout from '../layout/authLayout';
import DashboardLayout from '../layout/dashboardLayout';
import MyTask from '../features/auth/Dashboard/MyTask';
import Inbox from '../features/auth/Inbox';
import InviteCandidates from '../features/auth/Dashboard/InviteCandidates';
import ReferredCandidates from '../features/auth/Dashboard/ReferredCandidates';
import ShortlistedCandidates from '../features/auth/Dashboard/ShortlistedCandidates';
import Archived from '../features/auth/Dashboard/Archived';
import JobList from '../features/auth/JobList';
import CandidatesLayout from '../features/auth/Candidates';

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
                        <Route
                            path="/invited-candidates"
                            element={
                                <RequireAuth>
                                    <InviteCandidates />
                                </RequireAuth>
                            }
                        />

                        <Route
                            path="/referred-candidates"
                            element={
                                <RequireAuth>
                                    <ReferredCandidates />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/shortlisted-candidates"
                            element={
                                <RequireAuth>
                                    <ShortlistedCandidates />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/archived"
                            element={
                                <RequireAuth>
                                    <Archived />
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
                    <Route
                        path="/job-list"
                        element={
                            <RequireAuth>
                                <JobList />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/candidates"
                        element={
                            <RequireAuth>
                                <CandidatesLayout />
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
