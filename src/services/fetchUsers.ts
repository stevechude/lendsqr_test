import { UserDetails } from "@/lib/types";

export const fetchUsers = async () => {
  const response = await fetch("/data/generated.json");
  const data = await response.json();
  return Array.isArray(data) ? data : [];
};

export const fetchUserById = async (id: string) => {
  const response = await fetch(`/data/generated.json/`);
  const data = await response.json();
  const userWithId = data?.find((user: UserDetails) => user._id == id);
  return userWithId;
};
