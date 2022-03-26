import { chakra, ImageProps, forwardRef } from "@chakra-ui/react";
import logo from "./logo-white.png";

export const LogoWhite = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={logo} ref={ref} {...props} />;
});
