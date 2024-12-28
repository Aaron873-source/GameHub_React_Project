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

/**
 * PlatformIconList component renders a list of platform icons based on the provided platforms.
 *
 * @param {Object} props - The props object.
 * @param {Platform[]} props.platforms - An array of platform objects, each containing an id and slug.
 *
 * @returns {JSX.Element} A horizontal stack of icons representing the platforms.
 *
 * The component uses a mapping of platform slugs to icon components from the `react-icons` library.
 * If a platform slug does not have a corresponding icon in the map, a default globe icon (BsGlobe) is used.
 *
 * Example usage:
 * ```tsx
 * <PlatformIconList platforms={[{ id: 1, slug: 'pc' }, { id: 2, slug: 'playstation' }]} />
 * ```
 */

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
