"use client";
import { useParams } from "next/navigation";

export default function UserPage() {
  const params = useParams();

  console.log(params);

  return <section></section>;
}
