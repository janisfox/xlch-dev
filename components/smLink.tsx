import Image from 'next/image';

export type SmLinkProps = {
    url: string,
    img: string,
}

export function SmLink({url, img}: SmLinkProps) {
    return (
        <a href={url}>
            <Image
                alt="Social Media Link"
                height={35}
                width={35}
                src={img}
                loading="eager"
                unoptimized={img.endsWith(".svg")}
                style={{ width: "35px", height: "auto" }}
            />
        </a>
    )
}