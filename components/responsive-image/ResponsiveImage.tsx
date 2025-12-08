import Image from "next/image";

interface ResponsiveImageProps {
  smallSrc: string;
  largeSrc: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  breakpoint?: number;
  priority?: boolean;
  fill?: boolean;
}

const ResponsiveImage = ({
  smallSrc,
  largeSrc,
  alt,
  width,
  height,
  className,
  breakpoint = 1025,
  priority = false,
  fill = false,
}: ResponsiveImageProps) => {
  return (
    <picture>
      <source srcSet={largeSrc} media={`(min-width: ${breakpoint}px)`} />
      <Image
        src={smallSrc}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={className}
        priority={priority}
      />
    </picture>
  );
};

export default ResponsiveImage;
