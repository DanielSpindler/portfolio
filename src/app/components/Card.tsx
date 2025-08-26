"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  CardProps,
} from "@heroui/react";

export default function App({
  link,
  linkText,
  cardTitle,
  showIcon = true,
  cardInfo,
  ...props
}: {
  link?: string;
  linkText?: string;
  cardTitle: string;
  cardInfo: string;
  showIcon?: boolean;
} & CardProps) {
  return (
    <Card
      {...props}
      className="max-w-full h-full bg-black/55 text-white text-shadow-md text-shadow-black shadow-lg hover:scale-105"
    >
      <CardHeader className="flex gap-3">
        {showIcon && (
          <Image
            height={40}
            radius="sm"
            alt="card icon"
            src="/favicon.png"
            width={40}
          />
        )}
        <div className="flex flex-col">
          <p className="text-md">{cardTitle}</p>
          <p className="text-small text-default-500">{cardInfo}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>{props.children}</CardBody>
      <Divider />
      {linkText && (
        <CardFooter>
          <Link isExternal showAnchorIcon href={link}>
            {linkText}
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
