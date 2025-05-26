"use client";
import HomePage from "../components/HomePage";
import Pattern from "../components/pattern";

export default function Home() {
  return (
    <main className="relative">
      <div className="min-h-screen bg-white relative overflow-hidden">
        <Pattern />
        <HomePage />
      </div>
    </main>
  );
}
