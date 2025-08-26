import { Image, ImageProps as HeroImageProps } from "@heroui/image";

export default function App(props: HeroImageProps) {
  return <Image {...props} alt="zoomable image" />;
}
