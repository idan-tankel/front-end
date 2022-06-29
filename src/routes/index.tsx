import { Suspense, lazy, ElementType } from 'react';
import { Navigate, useLocation, Routes, Route } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';

// Testing build without lazy loading; also this template has problems as originally empty;
// import Profile from '../pages/Profile';
// import Tasks from '../pages/Tasks';
// import Calendar from '../pages/Calendar';
// import OrganizationOther from '../pages/OrganizationOther';
// import OrganizationOwn from '../pages/OrganizationOwn';
// import NotFound from '../pages/Page404';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="organization" element={<Calendar />}>
            <Route path="other-organization" element={<OrganizationOther />} />
            <Route path="my-organization" element={<OrganizationOwn />} />
            <Route
              index
              element={<Navigate to="/dashboard/organization/other-organization" replace />}
            />
          </Route>
        </Route>
        <Route index element={<Navigate to="/dashboard/profile" replace />} />
        <Route path="*" element={<LogoOnlyLayout />}>
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Route>
    </Routes>
  );
}

// Dashboard
const Profile = Loadable(lazy(() => import('../pages/Profile')));
const Tasks = Loadable(lazy(() => import('../pages/Tasks')));
const Calendar = Loadable(lazy(() => import('../pages/Calendar')));
const OrganizationOther = Loadable(lazy(() => import('../pages/OrganizationOther')));
const OrganizationOwn = Loadable(lazy(() => import('../pages/OrganizationOwn')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
