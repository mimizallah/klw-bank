import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'dashboards',
    icon: 'simple-icon-home',
    label: 'Dashboard',
    to: `${adminRoot}/dashboards`,
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-home',
        label: 'Dashboard',
        to: `${adminRoot}/dashboards/default`,
        // roles: [UserRole.Admin],
      }
    ],
  },

  {
    id: 'users',
    icon: 'simple-icon-people',
    label: 'Users',
    to: `${adminRoot}/users`,
    subs: [
      {
        icon: 'simple-icon-people',
        label: 'All Users',
        to: `${adminRoot}/users/all-users`,
      },
      {
        icon: 'simple-icon-user-follow',
        label: 'Create New Account',
        to: `${adminRoot}/users/new-user`,
      },
      {
        icon: 'iconsminds-credit-card',
        label: 'Credit/Debit User',
        to: `${adminRoot}/users/credit-debit-user`,
      },
      {
        icon: 'iconsminds-mail-money',
        label: 'Wire Transfer User',
        to: `${adminRoot}/users/wire-transfer`,
      },
    ],
  },

  {
    id: 'transactions',
    icon: 'iconsminds-credit-card',
    label: 'Transactions',
    to: `${adminRoot}/transactions`,
    subs: [
      {
        icon: 'iconsminds-credit-card',
        label: 'Credit/Debit Transaction',
        to: `${adminRoot}/transactions/credit-debit`,
      },
      {
        icon: 'iconsminds-credit-card',
        label: 'Witdraw Transaction',
        to: `${adminRoot}/transactions/survey`,
      },
      {
        icon: 'iconsminds-credit-card',
        label: 'Crypto Transaction',
        to: `${adminRoot}/transactions/crypto-transactions`,
      },
      {
        icon: 'iconsminds-credit-card',
        label: 'Domestic Transaction',
        to: `${adminRoot}/transactions/domestic-transactions`,
      },
      {
        icon: 'iconsminds-credit-card',
        label: 'Loan Request',
        to: `${adminRoot}/transactions/loan-requests`,
      },
    ],
  },
  {
    id: 'cards',
    icon: 'iconsminds-credit-card',
    label: 'Cards',
    to: `${adminRoot}/credit-card`,
    subs: [
      {
        icon: 'iconsminds-credit-card',
        label: 'Virtual Cards',
        to: `${adminRoot}/cards/virtual-cards`,
      }
      
    ],
  },
  
  {
    id: 'settings',
    icon: 'simple-icon-settings',
    label: 'Settings',
    to: `${adminRoot}/settings`,
    subs: [
      {
        icon: 'simple-icon-user',
        label: 'Profile',
        to: `${adminRoot}/settings/profile`,
      },
      {
        icon: 'iconsminds-credit-card',
        label: 'Deposit Method',
        to: `${adminRoot}/settings/deposit-method`,
        
      },
      {
        icon: 'iconsminds-mail-money',
        label: 'Virtual Deposit',
        to: `${adminRoot}/settings/virtual-deposit`,
        
      },
      {
        icon: 'simple-icon-settings',
        label: 'Settins',
        to: `${adminRoot}/settings/setting`,
        
      }
    ],
  }
];

export default data;
