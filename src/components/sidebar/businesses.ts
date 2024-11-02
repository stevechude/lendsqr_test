import Fees from "@/assets/businesses/Fees";
import LoanP from "@/assets/businesses/LoanP";
import Orgicon from "@/assets/businesses/Orgicon";
import ReportsIcon from "@/assets/businesses/ReportsIcon";
import SavingsP from "@/assets/businesses/SavingsP";
import ServAcc from "@/assets/businesses/ServAcc";
import Servcs from "@/assets/businesses/Servcs";
import SettlementIcon from "@/assets/businesses/SettlementIcon";
import TrxIcon from "@/assets/businesses/TrxIcon";

export const businessMenu = [
    {
        id: 1,
        name: "Organization",
        path: 'organization',
        icon: Orgicon,
    },
    {
        id: 2,
        name: "Loan Products",
        path: 'loan-products',
        icon: LoanP,
    },
    {
        id: 3,
        name: "Savings Products",
        path: 'savings-products',
        icon: SavingsP,
    },
    {
        id: 4,
        name: "Fees and Charges",
        path: 'fees-charges',
        icon: Fees,
    },
    {
        id: 5,
        name: "Transactions",
        path: 'transactions',
        icon: TrxIcon,
    },
    {
        id: 6,
        name: "Services",
        path: 'services',
        icon: Servcs,
    },
    {
        id: 7,
        name: "Service Account",
        path: 'service-account',
        icon: ServAcc,
    },
    {
        id: 8,
        name: "Settlements",
        path: 'settlements',
        icon: SettlementIcon,
    },
    {
        id: 9,
        name: "Reports",
        path: 'reports',
        icon: ReportsIcon,
    },
];
