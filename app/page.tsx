import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <h1 className="text-3xl font-bold underline"></h1>
    </main>
  );
}
