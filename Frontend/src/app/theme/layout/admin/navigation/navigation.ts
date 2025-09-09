export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  // Navigation
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/analytics',
        icon: 'feather icon-home'
      }
    ]
  },
  //  Admin
  {
    id: 'Admin-Panel',
    title: 'Admin Panel',
    type: 'group',
    icon: 'icon-group',
    children: [
      {

        id: 'marcent',
        title: 'Marcent',
        type: 'item',
        // type: 'collapse',
        icon: 'feather icon-box',
        url: '/marcent'
      },
      {
        id: 'pricing-plan-tbl',
        title: 'Pricing Plan',
        type: 'item',
        // type: 'collapse',
        icon: 'feather icon-map',
        url: '/pricing-plan-tbl'
      },
      {
        id: 'Parcels',
        title: 'Parcels',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'All-Parcel',
            title: 'All Parcel',
            type: 'item',
            url: '/all-parcel'
          },
          {
            id: 'Pending',
            title: 'Pending',
            type: 'item',
            url: '/pending'
          },
          {
            id: 'confirm',
            title: 'confirm',
            type: 'item',
            url: '/confirm'
          },
          {
            id: 'Picked',
            title: 'Picked',
            type: 'item',
            url: '/picked'
          },
          {
            id: 'Delivered',
            title: 'Delivered',
            type: 'item',
            url: '/delivered'
          },
          // {
          //   id: 'In-Transit',
          //   title: 'In Transit',
          //   type: 'item',
          //   url: '/in-transit'
          // },
          {
            id: 'Returned',
            title: 'Returned',
            type: 'item',
            url: '/returned'
          },
          {
            id: 'return-back',
            title: 'Return Back',
            type: 'item',
            url: '/return-back'
          }
        ]
      },
      {
        id: 'location',
        title: 'Location',
        type: 'collapse',
        icon: 'feather icon-map-pin',
        children: [
          {
            id: 'city',
            title: 'City',
            type: 'item',
            url: '/city'
          },
          {
            id: 'zonee',
            title: 'Zonee',
            type: 'item',
            url: '/zonee'
          },
          {
            id: 'area',
            title: 'Area',
            type: 'item',
            url: '/area'
          }

        ]
      },
    ]
  },
  //  Component
  {
    id: 'Component',
    title: 'Component',
    type: 'group',
    icon: 'icon-group',
    children: [
      {

        id: 'Create-New-Parcel',
        title: 'Create New Parcel',
        type: 'item',
        // type: 'collapse',
        icon: 'feather icon-box',
        url: '/Create-New-Parcel'
      },
      {
        id: 'Parcels',
        title: 'Parcels',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [
          {
            id: 'All-Parcel',
            title: 'All Parcel',
            type: 'item',
            url: '/all-parcel'
          },
          {
            id: 'Pending',
            title: 'Pending',
            type: 'item',
            url: '/pending'
          },
          {
            id: 'confirm',
            title: 'confirm',
            type: 'item',
            url: '/confirm'
          },
          {
            id: 'Picked',
            title: 'Picked',
            type: 'item',
            url: '/picked'
          },
          {
            id: 'Delivered',
            title: 'Delivered',
            type: 'item',
            url: '/delivered'
          },
          // {
          //   id: 'In-Transit',
          //   title: 'In Transit',
          //   type: 'item',
          //   url: '/in-transit'
          // },
          {
            id: 'Returned',
            title: 'Returned',
            type: 'item',
            url: '/returned'
          },
          {
            id: 'return-back',
            title: 'Return Back',
            type: 'item',
            url: '/return-back'
          }
        ]
      },
      {
        id: 'location',
        title: 'Location',
        type: 'collapse',
        icon: 'feather icon-map-pin',
        children: [
          {
            id: 'city',
            title: 'City',
            type: 'item',
            url: '/city'
          },
          {
            id: 'zonee',
            title: 'Zonee',
            type: 'item',
            url: '/zonee'
          },
          {
            id: 'area',
            title: 'Area',
            type: 'item',
            url: '/area'
          }

        ]
      },
    ]
  },
  // Store
    {
    id: 'Store',
    title: 'Store',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'Create-Store',
        title: 'Create Store',
        type: 'item',
        url: '/create-store',
        icon: 'feather icon-shopping-cart',
        // target: true,
        // breadcrumbs: false
      },
      {
        id: 'Store-All-Data',
        title: 'Store All Data',
        type: 'item',
        url: '/Store-All-Data',
        icon: 'feather icon-server',
        // target: true,
        // breadcrumbs: false
      },
      {
        id: 'signin',
        title: 'Sign in',
        type: 'item',
        url: '/login',
        icon: 'feather icon-log-in',
        target: true,
        breadcrumbs: false
      }
    ]
  },
  // Authentication
  {
    id: 'Authentication',
    title: 'Authentication',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'signup',
        title: 'Sign up',
        type: 'item',
        url: '/register',
        icon: 'feather icon-at-sign',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'signin',
        title: 'Sign in',
        type: 'item',
        url: '/login',
        icon: 'feather icon-log-in',
        target: true,
        breadcrumbs: false
      }
    ]
  },
  // chart
  {
    id: 'chart',
    title: 'Chart',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'apexchart',
        title: 'ApexChart',
        type: 'item',
        url: '/chart',
        classes: 'nav-item',
        icon: 'feather icon-pie-chart'
      }
    ]
  },
  // Forms and Tables
  {
    id: 'forms & tables',
    title: 'Forms & Tables',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'forms',
        title: 'Basic Forms',
        type: 'item',
        url: '/forms',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
      {
        id: 'tables',
        title: 'Tables',
        type: 'item',
        url: '/tables',
        classes: 'nav-item',
        icon: 'feather icon-server'
      }
    ]
  },
  // Other
  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'menu-level',
        title: 'Menu Levels',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [
          {
            id: 'menu-level-2.1',
            title: 'Menu Level 2.1',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'menu-level-2.2',
            title: 'Menu Level 2.2',
            type: 'collapse',
            children: [
              {
                id: 'menu-level-2.2.1',
                title: 'Menu Level 2.2.1',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'menu-level-2.2.2',
                title: 'Menu Level 2.2.2',
                type: 'item',
                url: 'javascript:',
                external: true
              }
            ]
          }
        ]
      }
    ]
  }
];
