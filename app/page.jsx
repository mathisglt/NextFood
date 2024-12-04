import Link from "next/link";
export default function Home() {
  return (
    <main>
      <p><Link href="/meals">Meals</Link></p>
      <p><Link href="/meals/share">Meals</Link></p>
      <p><Link href="/community">Meals</Link></p>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
    </main>
  );
}
