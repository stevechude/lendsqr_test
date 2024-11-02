import AuditIcon from "@/assets/settings/AuditIcon";
import FeesPricing from "@/assets/settings/FeesPricing";
import PrefsIcon from "@/assets/settings/PrefsIcon";

export const settingsMenu = [
  {
    id: 1,
    name: "Preferences",
    path: 'preferences',
    icon: PrefsIcon,
  },
  {
    id: 2,
    name: "Fees and Pricing",
    path: 'fees-pricing',
    icon: FeesPricing,
  },
  {
    id: 3,
    name: "Audit Logs",
    path: 'audit-logs',
    icon: AuditIcon,
  },
];
