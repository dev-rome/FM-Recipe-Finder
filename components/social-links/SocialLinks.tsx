import Image from "next/image";

type SocialLinksProps = {
  href: string;
  icon: string;
  label: string;
  width?: number;
  height?: number;
};

const SocialLinks = ({
  href,
  icon,
  label,
  width,
  height,
}: SocialLinksProps) => {
  return (
    <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
      <Image src={icon} alt={label} width={width} height={height} />
    </a>
  );
};

export default SocialLinks;
