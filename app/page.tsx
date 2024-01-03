import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-4">abasho</h1>
      <Image src="/192.png" alt="abasho 192" width={500} height={500} />
    </main>
  )
}
