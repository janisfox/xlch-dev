import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-black">
      {/* Background */}
      <div className="bg-[url(/Niko.jpg)] bg-cover w-screen h-screen absolute brightness-25" />

      {/* Card */}
      <div className="z-2 bg-black/30 p-5 rounded-4xl border-2 border-neutral-600/50 gap-2 flex flex-col max-w-[70vh]">
        {/* Title */}
        <div className="flex flex-row gap-5 items-center">
          <Image className="rounded-3xl" src="/wypher.jpg" alt="wypher" width={100} height={0} />
          <div className="gap-1 flex flex-col">
            <p className="text-white text-3xl font-[inter] font-bold">janis 💫</p>
            <p className="text-white text-xl font-[inter]">i like cats :3</p>          
          </div>
        </div>
        <p className="font-[inter] text-white text-wrap text-lg">Hi there fellow reader! I'm a young developer and I'd appreciate it if you support my work!</p>
        <div className="my-3">
          <a href="https://www.roblox.com/users/4045593989/profile">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Roblox_Logo.svg" alt="Roblox Icon" width={35} height={35} />
          </a>
        </div>
      </div>
    </div>
  );
}
