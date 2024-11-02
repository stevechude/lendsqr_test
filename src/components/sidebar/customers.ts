import DecisionIcon from "@/assets/customers/DecisionIcon";
import GuarantorIcon from "@/assets/customers/GuarantorIcon";
import KarmaIcon from "@/assets/customers/KarmaIcon";
import LoanIcon from "@/assets/customers/LoanIcon";
import LoanReq from "@/assets/customers/LoanReq";
import SavingsIcon from "@/assets/customers/SavingsIcon";
import UsersIcon from "@/assets/customers/UsersIcon";
import WhiteLiastIcon from "@/assets/customers/WhiteLiastIcon";

export const customersMenu = [
  {
    id: 1,
    name: "Users",
    path: 'users',
    icon: UsersIcon,
  },
  {
    id: 2,
    name: "Guarantors",
    path: 'guarantors',
    icon: GuarantorIcon,
  },
  {
    id: 3,
    name: "Loans",
    path: 'loans',
    icon: LoanIcon,
  },
  {
    id: 4,
    name: "Decision Models",
    path: 'decision',
    icon: DecisionIcon,
  },
  {
    id: 5,
    name: "Savings",
    path: 'savings',
    icon: SavingsIcon,
  },
  {
    id: 6,
    name: "Loan Requests",
    path: 'loan-requests',
    icon: LoanReq,
  },
  {
    id: 7,
    name: "Whitelist",
    path: 'whitelist',
    icon: WhiteLiastIcon,
  },
  {
    id: 8,
    name: "Karma",
    path: 'karma',
    icon: KarmaIcon,
  },
];
