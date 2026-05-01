'use client';
import { useEffect, useState } from 'react';
import type { ComponentType } from 'react';
import BorderGlow from "@/components/borderGlow";
import { MdOutlineWork, MdOutlineMoreHoriz } from "react-icons/md";
import { IoInformationCircleSharp } from "react-icons/io5";
import { SmLinkExpanded } from './smLinkExpanded';

function CategoryButton({icon: Icon, text, isActive, onClick}: {text: string, icon: ComponentType<{ className?: string }>, isActive: boolean, onClick: () => void}) {
    return (
        <button 
            onClick={onClick}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-opacity ${
                isActive ? 'bg-neutral-700' : 'bg-neutral-800 hover:opacity-80'
            }`}
        >
            <Icon className="text-xl" />
            <p className="text-xl">{text}</p>
        </button>
    )
}

type ProjectProps = {
    url: string,
    title: string,
    description: string,
    image: string,
    fill: boolean,
    brightness?: number,
    tags: string[],
    filledCount: number,
    index: number,
}

const projects = [
  {
    title: "Cealshell",
    description: "A simple CLI tool for Roblox Studio",
    url: "https://cealshell.dev/",
    image: "/cealshell.png",
    tags: ["luau", "react"],
    fill: true,
  },
  {
    title: "Orbit",
    description: "A developer-friendly paid admin panel.",
    url: "https://devforum.roblox.com/t/orbit-%E2%80%94-stay-in-control-stay-in-orbit/4004198",
    image: "/orbit.png",
    tags: ["luau", "ui"],
    fill: true,
  },
  {
    title: "Marble",
    description: "Easy-to-use RBAC System with Datastore Support",
    url: "https://devforum.roblox.com/t/marble-a-simple-authentication-module-with-datastore-support/4606537",
    image: "/marbleIcon.png",
    tags: ["luau"],
    brightness: 35,
    fill: false,
  },
  {
    title: "Cutscene Module",
    description: "Simple module for controlling cutscene cameras & gui",
    url: "https://devforum.roblox.com/t/cutscene-module-v1-%E2%94%81-a-easy-to-use-cutscene-api/3602795",
    image: "/cutsceneIcon.png",
    tags: ["luau"],
    brightness: 35,
    fill: false,
  }
];

function shouldSpanTwo(fill: boolean, index: number, total: number, filledCount: number): boolean {
  if (fill) return true;
  const isLastItem = index === total - 1;
  const wouldBeOrphaned = filledCount % 2 === 0;
  return isLastItem && wouldBeOrphaned;
}

function Project({url, title, description, image, fill, tags, brightness, filledCount, index}: ProjectProps) {
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
            colors={['#6A23C2', '#6A23C2', '#6A23C2']}
            className={`h-60 ${shouldSpanTwo(fill, index, projects.length, filledCount) ? "col-span-2" : ""}`}
        >
            <a href={url} className="relative h-full text-left p-5 font-[inter] overflow-hidden rounded-[28px]">
                <div className="flex flex-row absolute top-0 right-0 z-20 pt-3 pr-5 gap-1">
                    {tags.map((tag, idx) => (
                        <span className={`rounded-full px-3 py-1 ${tag === "react" ? "bg-blue-700" : "bg-neutral-700"}`} key={"span-"+idx}>{tag}</span>
                    ))}
                </div>
                <div className="flex flex-col justify-end items-start h-full">
                    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" style={{ filter: brightness !== undefined ? `brightness(${brightness}%)` : 'brightness(100%)' }} />
                    <p className="relative z-10 text-2xl">{title}</p>
                    <p className="relative z-10 text-lg">{description}</p>
                </div>
            </a>
        </BorderGlow>
    )
}

export default function SecondCard() {
    const [activeCategory, setActiveCategory] = useState<'work' | 'about' | 'more'>('about');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const content = {
        work: (
            <div className="text-white font-[inter]">
                <h3 className="text-2xl font-bold mb-1">My Work</h3>
                <p className="text-neutral-500 mb-5">Projects I've worked on and designed.</p>
                <div className="grid grid-cols-2 gap-4 overflow-visible">
                    {projects.map((project, index) => {
                        const filledCount = projects.slice(0, index).reduce((acc, p) => acc + (p.fill ? 2 : 1), 0);
                        return (
                            <Project
                            key={index}
                            {...project}
                            index={index}
                            filledCount={filledCount}
                            />
                        );
                    })}
                </div>
            </div>
        ),
        about: (
            <div className="text-white font-[inter]">
                <h3 className="text-2xl font-bold mb-1">About Me</h3>
                <p className="text-neutral-500 mb-5">Who I am and what I do.</p>
                <div className="mt-5">
                    <BorderGlow
                        edgeSensitivity={30}
                        glowColor="40 80 80"
                        backgroundColor="#120F17"
                        borderRadius={28}
                        glowRadius={40}
                        glowIntensity={1}
                        coneSpread={25}
                        animated={false}
                        colors={['#6A23C2', '#6A23C2', '#6A23C2']}
                        className={"h-30 mb-5"}
                    >
                        <img src="/banner.jpg" alt="Wypher Banner" className="absolute inset-0 w-full h-full object-cover rounded-[28px]" />
                    </BorderGlow>

                    <div className="flex flex-row">
                        <div className="flex-1 text-left px-5 w-full flex flex-col gap-2">
                            <p>hi! my name is janis. i've started programming way back when i was 8, and started specializing into luau some years after.</p>
                            <p>i'm open for anyone's ideas that i might just make if i'm bored.</p>
                            <p>currently, i'm learning next.js, html & css and advanced java. and as already mentioned i am specialzed into luau (roblox).</p>
                            <p>i also started with UI design a few years ago, check out my work by switching categories!</p>
                        </div>
                        <div className="flex flex-col justify-start text-right pr-8 pl-4">
                            <p>Gender: Male</p>
                            <p>CS & IT student</p>
                            <p>he/him</p>
                            <p>———————</p>
                            <p>📍 Austria,</p>
                            <p>Lower Austria</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
        more: (
            <div className="text-white font-[inter]">
                <h3 className="text-2xl font-bold mb-1">More</h3>
                <p className="text-neutral-500 mb-5">Socials and so on.</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                    <SmLinkExpanded url='https://www.youtube.com/@janisishere' img='https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' text='YouTube: @janisishere' />
                    <SmLinkExpanded url='https://discord.gg/q9waxDaNey' img='/discord.svg' text='Discord: xlch_studios()' />
                    <SmLinkExpanded url='https://discord.com/users/654662261016756254' img='/discord.svg' text='Discord: @_jxnis_' />
                    <SmLinkExpanded url='https://discord.gg/Vpsyd59r5X' img='/discord.svg' text='Discord: Flux Studios' />
                </div>
                <p className='mt-5'>Founder @ xlch_studios()</p>
                <p>Creative Director @ Flux Studios</p>
            </div>
        ),
    };

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

            <div className="z-2 p-5 rounded-4xl gap-4 flex flex-col max-w-[70vh]">
                {/* Buttons - outside scroll container */}
                <div className="flex flex-row gap-3 justify-center items-center relative z-50">
                    <CategoryButton 
                        text="Work" 
                        icon={MdOutlineWork} 
                        isActive={activeCategory === 'work'}
                        onClick={() => setActiveCategory('work')}
                    />
                    <CategoryButton 
                        text="About Me" 
                        icon={IoInformationCircleSharp} 
                        isActive={activeCategory === 'about'}
                        onClick={() => setActiveCategory('about')}
                    />
                    <CategoryButton 
                        text="More" 
                        icon={MdOutlineMoreHoriz} 
                        isActive={activeCategory === 'more'}
                        onClick={() => setActiveCategory('more')}
                    />
                </div>

                {/* Only the content scrolls */}
                <div className="max-h-[calc(80vh-250px)] overflow-y-scroll no-scrollbar overflow-x-hidden">
                    <div className="text-center">
                        {content[activeCategory]}
                    </div>
                </div>
            </div>
        </BorderGlow>
    )
}