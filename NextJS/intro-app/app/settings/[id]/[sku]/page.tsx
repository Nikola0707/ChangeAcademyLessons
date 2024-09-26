"use client";
import { useParams } from "next/navigation";

export default function SettingsPage() {
  const params = useParams();

  return <h1>Settings: {JSON.stringify(params)}</h1>;
}
