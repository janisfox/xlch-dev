import Image from 'next/image';

export type SmLinkProps = {
    url: string,
    img: string,
    text: string,
}

export function SmLinkExpanded({url, img, text}: SmLinkProps) {
    return (
        <a href={url} className="flex justify-center items-center gap-3 bg-neutral-800/90 py-3 rounded-full hover:opacity-80 transition-opacity">
            <Image
                alt="Social Media Link"
                height={35}
                width={35}
                src={img}
                loading="eager"
                unoptimized={img.endsWith(".svg")}
                style={{ width: "35px", height: "auto" }}
            />
            <p className="font-[inter] text-lg">{text}</p>
        </a>
    )
}