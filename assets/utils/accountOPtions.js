// import {}

import Cart from "../../screens/Cart";
import { Address, Bell, Call, CartIcon, Contact, Feedback, Key, Language, LogOut, Orders, Payment, Profile, Whatsapp } from "../icons/Icons";

export const accountOptions = [
  {
    name: "profile",
    component: 'Profile',
    icon: <Profile  />,
  },
  {
    name: "orders",
    component: 'Orders',
    icon: <Orders />,
  },
  {
    name: "address",
    component: 'MyAddress',
    icon: <Address />,
  },
  {
    name: "payment",
    component: '',
    icon: <Payment />,
  },
  {
    name: "contact us",
    component: 'Contact',
    icon: <Contact />,
  },
  {
    name: "log out",
    component: '',
    icon: <LogOut />,
  },
];

export const vendorOptions = [
  {
    name: "Add A Product",
    component: 'Profile',
    icon: <Profile  />,
  },
  {
    name: "Add A Post",
    component: 'Profile',
    icon: <Profile  />,
  },
  {
    name: "Orders",
    component: 'Orders',
    icon: <Orders />,
  },
  {
    name: "View Products",
    component: 'MyAddress',
    icon: <Address />,
  },
  {
    name: "View Sales",
    component: 'MyAddress',
    icon: <Address />,
  },
  {
    name: "Payment",
    component: '',
    icon: <Payment />,
  },
];

export const profileOptions = [
  {
    name: "edit profile",
    icon: <Profile  />,
  },
  {
    name: "change password",
    icon: <Key />,
  },
  {
    name: "my cards",
    icon: <CartIcon />,
  },

];


export const appSettingsOptions = [
  {
    name: "notification",
    icon: <Bell  />,
  },
  {
    name: "language",
    icon: <Language />,
  },
  {
    name: "my cards",
    icon: <CartIcon />,
  },

];

export const contactOptions = [
  {
    name: "call",
    component: '',

    icon: <Call  />,
  },
  {
    name: "whatsapp",

    component: '',

    icon: <Whatsapp />,
  },
  {
    name: "feedback",
    component: 'FeedBack',
    icon: <Feedback />,
  },

];
