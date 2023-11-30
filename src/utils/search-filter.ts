import { User } from "@/types/User";

export default function searchFilter(users: User[], value: string): User[] {
  const normalizeValue = value.toLowerCase();

  return users.filter((user) => {
    const name = `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}}`;
    return (
      name.includes(normalizeValue) ||
      user.username.toLowerCase().includes(normalizeValue) ||
      user.email.toLowerCase().includes(normalizeValue) ||
      user.id.toString().includes(normalizeValue)
    );
  });
}
