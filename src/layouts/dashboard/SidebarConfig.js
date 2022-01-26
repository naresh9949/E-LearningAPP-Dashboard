import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import Settings from '@iconify/icons-eva/settings-2-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'user',
    path: '/dashboard/user',
    children:[{
      title: 'All Users',
      path: '/dashboard/user/allusers',
    },
    {
      title: 'Edit User',
      path: '/dashboard/user/edituser',
    }
  ],
    icon: getIcon(peopleFill)
  },
  {
    title: 'Course',
    path: '/dashboard/products',
    
    children:[
      {
        title: 'All courses',
        path: '/dashboard/course/allcourses',
      },
      {
      title: 'Add Course',
      path: '/dashboard/course/addnewcourse',
    }
  ],
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Settings',
    children:[{
      title: 'General',
      path: '/dashboard/settings/general',
    },{
      title: 'Home',
      path: '/dashboard/settings/home',
    },
    {
      title: 'Security',
      path: '/dashboard/settings/security',
    }
  ],
    icon: getIcon(Settings)
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon(lockFill)
  },
  {
    title: 'register',
    path: '/register',
    children:[],
    icon: getIcon(personAddFill)
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon(alertTriangleFill)
  }
];

export default sidebarConfig;
