import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillHome , AiFillFolder , AiFillMeh , } from 'react-icons/ai'
import { BsFillSendFill , BsFillPeopleFill } from 'react-icons/bs'
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Link from "next/link";

const DrawerComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="lg:hidden">
        <HamburgerIcon  w={8} h={8} onClick={onOpen} />

        <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Noble Fable</DrawerHeader>

              <DrawerBody>
                {/* Add your drawer content here */}
                <div className="py-4 overflow-y-auto">
                  <ul className="space-y-2 font-medium">
                    <li>
                      <a
                        href=""
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <AiFillHome 
                        className=" text-gray-500  hover:text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        size={25}
                        />
                        <span className="ml-3">Home</span>
                      </a>
                      <a
                        href="/About"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <AiFillMeh 
                        className=" text-gray-500  hover:text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        size={25}
                        />
                        <span className="ml-3">About</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <BsFillSendFill 
                        className=" text-gray-500  hover:text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        size={25}
                        />
                        <span className="ml-3">Contact</span>
                      </a>
                    </li>
                  </ul>
                </div>

              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </div>

    </>
  );
};

export default DrawerComponent;
