import Image, { ImageProps } from 'next/image';

interface SEOImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  priority?: boolean;
}

export default function SEOImage({ alt, priority = false, ...props }: SEOImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      placeholder={props.src && typeof props.src === 'string' && props.src.startsWith('data:') ? undefined : 'blur'}
      blurDataURL={props.blurDataURL || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='}
    />
  );
}