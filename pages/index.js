import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between p-24 bg-nude">
    <div className="flex flex-col pt-40 pl-10">
      <h1 className="text-black font-tangerine text-8xl py-2">Sarah Davies</h1>
      <h2 className="text-black font-syne-medium text-4xl pb-10">Software developer and designer
      <br/>
      based in the UK</h2>
      <a className="text-black font-sportinggrotesqueregular text-lg pt-1">Scroll down ↓</a>
    </div>
  </main>
  )
}
