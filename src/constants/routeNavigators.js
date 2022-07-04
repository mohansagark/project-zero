import App from "../App";
import About from "../screens/About";
import ExpenseTracker from "../screens/ExpenseTracker";
import ViewExpenses from "../screens/ExpenseTracker/viewExpenses";
import Login from "../screens/Login";
import PasswordGenerator from "../screens/PasswordGenerator";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import ToDoApp from "../screens/ToDoApp";
import ProfileComponent from "../screens/MyProfile";
import SubscriptionsComponent from '../screens/Subscriptions';


export const loginRoutes = [
  {
    name: "Login",
    path: "/login",
    element: <Login />,
  },
];



export const publicRoutes = [
  {
    name: "Privacy Policy",
    path: "/privacyPolicy",
    element: <PrivacyPolicy />,
  },
];

export const protectedRoutes = [
  {
    name: "Home",
    path: "/",
    element: <App />,
  },
  {
    name: "ToDo App",
    path: "/todoApp",
    element: <ToDoApp />,
  },
  {
    name: "About",
    path: "/about",
    element: <About />,
  },
  {
    name: "PasswordGenerator",
    path: "/passwordGenerator",
    element: <PasswordGenerator />,
  },
  {
    name: "Expense Tracker",
    path: "/expenseTracker",
    element: <ExpenseTracker />,
  },
  {
    name: "View Expenses",
    path: "/viewExpenses",
    element: <ViewExpenses />,
  },
  {
    name: "Profile",
    path: "/myProfile",
    element: <ProfileComponent />,
  },
  {
    name: "Subscriptions",
    path: "/subscriptions",
    element: <SubscriptionsComponent />,
  },
];
