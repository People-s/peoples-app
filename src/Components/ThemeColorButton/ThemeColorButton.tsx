import { Icon, IconButton, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

const ThemeColorButton: FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (<IconButton variant="ghost" aria-label="Toggle color theme" onClick={toggleColorMode} icon={<Icon as={ colorMode === 'dark' ? HiMoon : HiSun}/>}/>)
}

export default ThemeColorButton;