export interface UserDetails {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  organization: string;
  personalInfo: {
    fullName: string;
    phoneNumber: number;
    emailAddress: string;
    bvn: number;
    gender: string;
    maritalStatus: string;
    children: string;
    residenceType: string;
  };
  educationAndEmployment: {
    educationLevel: string;
    employmentStatus: string;
    sector: string;
    yearsOfEmployment: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: number;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    fullName: string;
    phoneNumber: number;
    emailAddress: string;
    relationship: string;
  };
  status: string;
  createdAt: string;
}

export interface User {
  _id: string;
  organization: string;
  personalInfo: {
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
  };
  createdAt: string;
  status: "pending" | "blacklisted" | "active" | "inactive" | string;
}
