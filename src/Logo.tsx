import { chakra, ImageProps, forwardRef } from "@chakra-ui/react";
import logo from "./logo.png";

export const Logo = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={logo} ref={ref} {...props} />;
});
