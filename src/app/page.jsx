import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex text-black flex flex-col">
        <Link scroll={false} href="/ilao" className=" mt-4 bg-emerald-500 p-2 ">
          Ilao
        </Link>
        <Link scroll={false} href="/teon" className="mt-4  bg-emerald-500 p-2">
          Teon
        </Link>
      </div>
    </main>
  )
}
