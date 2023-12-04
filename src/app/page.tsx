import Menu from "@/component/Menu";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'home',
    description: 'home page'
}

export default function Home() {
  return (
    <main>
      <div className="container">
        <Menu/>
      </div>
    </main>
  )
}
