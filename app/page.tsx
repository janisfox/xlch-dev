"use client"
import MainCard from '@/components/mainCard'
import SecondCard from '@/components/secondCard'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-black overflow-clip">

      {/* Background */}
      <div className="bg-[url(/Niko.jpg)] bg-cover w-screen h-screen absolute brightness-25" />

      {/* Cards */}
      <div className="flex flex-col gap-2 sm:px-6 px-4">
        <MainCard />
        <SecondCard />
      </div>
    </div>
  );
}
