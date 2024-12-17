import { useDisclosure } from '@nextui-org/react';
import { Button } from './button';
import React from 'react';
import { Drawer, DrawerContent, DrawerBody, DrawerFooter } from '@nextui-org/drawer';
interface Props {
  className?: string;
}

export const MenuDrawer: React.FC<Props> = ({ className }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button onClick={onOpen} className={className}>
        <img src="/img/burger.svg" alt="toggle burger" />
      </button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent className="bg-secondary">
          {(onClose) => (
            <>
              <DrawerBody className="grid place-content-center">
                <a href="#guide">
                  <Button
                    className="p-3 rounded-xl text-base font-medium w-full"
                    color="light"
                    onClick={onClose}>
                    How it works
                  </Button>
                </a>
                <a href="#vegetables">
                  <Button
                    className="p-3 rounded-xl text-base font-medium w-full"
                    color="transparent"
                    onClick={onClose}>
                    Vegetables
                  </Button>
                </a>
                <a href="#reviews">
                  <Button
                    className="p-3 rounded-xl text-base font-medium w-full"
                    color="transparent"
                    onClick={onClose}>
                    Reviews
                  </Button>
                </a>
              </DrawerBody>
              <DrawerFooter>
                <a href="#feedback">
                  <Button
                    className="py-4 px-[41px] rounded-[30px] text-small leading-[18px] font-semibold m-auto"
                    color="light"
                    onClick={onClose}>
                    SHOW NOW
                  </Button>
                </a>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
