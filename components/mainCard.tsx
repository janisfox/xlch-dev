import Image from "next/image";
import { SmLink } from "@/components/smLink";
import BorderGlow from "@/components/borderGlow";

export default function MainCard() {
    return (
        <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#120F17"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={['#ffffff', '#ffffff', '#ffffff']}
        >
            <div className="z-2 p-5 rounded-4xl gap-2 flex flex-col max-w-[70vh]">
            {/* Title */}
            <div className="flex flex-row gap-5 items-center">
                <Image
                    className="rounded-3xl"
                    src="/wypher.jpg"
                    alt="wypher"
                    width={100}
                    height={100}
                    style={{ width: "100px", height: "100px" }}
                    loading="eager"
                />
                <div className="gap-1 flex flex-col">
                    <p className="text-white text-3xl font-[inter] font-bold">janis 💫</p>
                    <p className="text-white text-xl font-[inter]">i like cats :3</p>          
                </div>
                <div className="my-3 flex-1 flex justify-end gap-3 pr-5 items-center">
                    <SmLink url="https://www.roblox.com/users/4045593989/profile" img="https://upload.wikimedia.org/wikipedia/commons/6/6c/Roblox_Logo.svg" />
                    <SmLink url="https://ko-fi.com/janisfox" img="/kofi_symbol.svg" />
                    <SmLink url="https://github.com/janisfox" img="/github-white-icon.svg" />
                </div>
            </div>
            <p className="font-[inter] text-white text-wrap text-lg">Heya fellow visitor! I'm a young developer and I'd appreciate it if you support my work. :)</p>
            
            </div>
        </BorderGlow>
    )
}