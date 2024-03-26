import Link from "next/link";

export default function Home() {
    return (
          <main>
            <h1>Blog</h1>
            <ul>
                <li><Link href='first'>Blog 1</Link></li>
                <li><Link href='second'>Blog 2</Link></li>
            </ul>
          </main>
    );
  }