// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      { title: 'Profile', path: '/dashboard/profile', icon: ICONS.dashboard },
      { title: 'Tasks', path: '/dashboard/tasks', icon: ICONS.ecommerce },
      {
        title: 'Organization',
        path: '/dashboard/organization',
        icon: ICONS.user,
        children: [
          { title: 'Other organization', path: '/dashboard/organization/other-organization' },
          { title: 'My organization', path: '/dashboard/organization/my-organization' },
        ],
      },
      { title: 'Calendar', path: '/dashboard/calendar', icon: ICONS.analytics },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'test',
  //   items: [
  //     {
  //       title: 'user',
  //       path: '/dashboard/user',
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'Four', path: '/dashboard/user/four' },
  //         { title: 'Five', path: '/dashboard/user/five' },
  //         { title: 'Six', path: '/dashboard/user/six' },
  //       ],
  //     },
  //   ],
  // },
];

export default navConfig;
