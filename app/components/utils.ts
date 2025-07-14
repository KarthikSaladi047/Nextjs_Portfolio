import { Variants } from "framer-motion";

type AnimationType = "spring" | "tween" | "inertia";

export const fadeIn = (
  direction: "left" | "right",
  type: AnimationType,
  delay: number,
  duration: number
): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "right" ? 100 : -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type,
      delay,
      duration,
    },
  },
});
