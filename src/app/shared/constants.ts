// export const menuList: Menu[] = [
//   {label: 'Home', url:'/home', icon: 'home'},
//   {label: 'About', url:'/about', icon: 'podium', showSubMenu: false, subMenu: [
//     {label: 'Bank\'s History', url: '/about/bank-history'},
//     {label: 'Chairman\'s Message',  url: '/about/chairman-message'},
//     {label: 'Board of Director',  url: '/about/board-of-director'},
//     {label: 'Management',  url: '/about/management'},
//     {label: 'Financial Strength',  url: '/about/financial-strength'},
//     {label: 'Photo Gallery',  url: '/about/photo-gallery'},
//     {label: 'Know Your Bank',  url: '/about/know-your-bank'}
//   ]},
//   {label: 'Services',  url:'/services', icon: 'albums', showSubMenu: false, subMenu: [
//     {label: 'Rupay',  url: '/services/Locker Facility'},
//     {label: 'SMS Banking',  url: '/services/sms-banking'},
//     {label: 'Mobile Banking',  url: '/services/mobile-banking'}
//   ]},
//   {label: 'Advances',  url:'/advances', icon: 'wallet', showSubMenu: false, subMenu: [
//     {label: 'Home Loan',  url: '/advances/home-loan'},
//     {label: 'Vehicle Loan',  url: '/advances/vehicle-loan'},
//     {label: 'Education Loan',  url: '/advances/education-loan'},
//     {label: 'Gold Loan',  url: '/advances/gold-loan'},
//     {label: 'Personal Loan',  url: '/advances/personal-loan'},
//     {label: 'Mortgage Loan',  url: '/advances/mortgage-loan'}
//   ]},
//   {label: 'Deposit',  url:'/deposit', icon: 'cash', showSubMenu: false, subMenu: [
//     {label: 'Saving Account',  url: '/deposit/saving-account'},
//     {label: 'Current Account',  url: '/deposit/current-account'},
//     {label: 'Fixed Account',  url: '/deposit/fixed-account'},
//     {label: 'Recurring Deposit',  url: '/deposit/recurring-deposit'},
//     {label: 'Deposit Calculator',  url: '/deposit/deposit-calculator'}
//   ]},
//   {label: 'Interest Rate',  url:'/interest-rate', icon: 'trending-up', showSubMenu: false, subMenu: [
//     {label: 'Loan Interest Rate',  url: '/interest-rate/loan-interest-rate'},
//     {label: 'Deposit Interest Rate',  url: '/interest-rate/deposit-interest-rate'}
//   ]},
//   {label: 'Contact Us',  url:'/contact-us', icon: 'call', showSubMenu: false, subMenu: [
//     {label: 'Branch Network',  url: '/contact-us/branch-network'},
//     {label: 'feedback',  url: '/contact-us/feedback'}
//   ]}
// ];


export const menuList: Menu[] = [
  {label: 'Home', url:'/home', icon: 'home'},
  {label: 'About', url:'/about', icon: 'podium'},
  {label: 'Courses',  url:'/services', icon: 'albums'},
  {label: 'Contact Us',  url:'/contact-us', icon: 'call'}
];

export interface Menu {
  subMenu?: Menu[];
  label: string;
  url: string;
  icon?: string;
  showSubMenu?: boolean;
  selected?: boolean;
}
