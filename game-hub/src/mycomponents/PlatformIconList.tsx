import { Platform } from "@/hooks/useGames";
import { HStack } from "@chakra-ui/react";
import React from "react";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiSega } from "react-icons/si";
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    xboxsx: FaXbox, // Placeholder icon for Xbox Series X/S
    switch: SiNintendo,
    sega: SiSega, // Placeholder icon for Sega
    ps5: FaPlaystation, // Placeholder icon for PS5
    ps4: FaPlaystation, // Placeholder icon for PS4
    ps3: FaPlaystation, // Placeholder icon for PS3
    ps2: FaPlaystation, // Placeholder icon for PS2
    ps1: FaPlaystation, // Placeholder icon for PS1
    psp: FaPlaystation, // Placeholder icon for PSP
  };

  return (
    <HStack color={"gray.300"} marginY={1}>
      {platforms.map((platform) => (
        <span key={platform.id}>
          {React.createElement(iconMap[platform.slug] || BsGlobe)}
          {/* Using default icon BsGlobe for unknown platforms */}
        </span>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
