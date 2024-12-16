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
              <DrawerBody className="flex flex-col items-center justify-center">
                <a href="#">
                  <Button color="light">How it works</Button>
                </a>
                <a href="#">
                  <Button color="transparent">Vegetables</Button>
                </a>
                <a href="#">
                  <Button color="transparent">Reviews</Button>
                </a>
              </DrawerBody>
              <DrawerFooter>
                <Button className="m-auto" color="light" onClick={onClose}>
                  SHOW NOW
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
