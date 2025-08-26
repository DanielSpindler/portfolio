"use client";
import {
  Drawer as HeroDrawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  useDisclosure,
  DrawerProps,
} from "@heroui/react";

type CustomeDrawerProps = DrawerProps & {
  title: string;
  lowerText?: string;
  trigger: string | React.ReactNode;
};

export default function Drawer({
  title,
  lowerText,
  trigger,
  ...props
}: CustomeDrawerProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className="bg-transparent" onPress={onOpen}>
        {trigger}
      </Button>
      <HeroDrawer
        {...props}
        className="max-w-64 bg-gradient-to-tl from-black/100 via-red-900/60 to-gray-800/60 text-white text-shadow-md text-shadow-black rounded-none"
        placement="left"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader
                className="flex flex-col gap-1 text-center backdrop-blur-sm"
                onClick={onClose}
              >
                {title}
              </DrawerHeader>
              <DrawerBody>
                <div onClick={onClose}>{props.children}</div>
                {lowerText && <span>{lowerText}</span>}
              </DrawerBody>
              {/*               <DrawerFooter>
            
              </DrawerFooter> */}
            </>
          )}
        </DrawerContent>
      </HeroDrawer>
    </>
  );
}
