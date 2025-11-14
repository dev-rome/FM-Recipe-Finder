import Image from "next/image";

interface ResponsiveImageProps {
  smallSrc: string;
  largeSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  breakpoint?: number;
}

const ResponsiveImage = ({
  smallSrc,
  largeSrc,
  alt,
  width,
  height,
  className,
  breakpoint = 1025,
}: ResponsiveImageProps) => {
  return (
    <picture>
      <source srcSet={largeSrc} media={`(min-width: ${breakpoint}px)`} />
      <source srcSet={smallSrc} media={`(max-width: ${breakpoint - 1}px)`} />
      <Image
        src={smallSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </picture>
  );
};

export default ResponsiveImage;
