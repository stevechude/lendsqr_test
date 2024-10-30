export const fetchUsers = async () => {
  const response = await fetch("/data/generated.json");
  const data = await response.json();
  return data;
};
