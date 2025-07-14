import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "./utils";
import Image from "next/image";

export const ServiceCard = ({
  index,
  title,
  icon,
}: {
  index: number;
  title: string;
  icon: string;
}) => (
  <Tilt
    glareEnable={true}
    glareMaxOpacity={0.3}
    scale={1.05}
    transitionSpeed={450}
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    className="w-[200px]"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate="show"
      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 p-[1px] rounded-[20px] shadow-lg"
    >
      <div className="bg-gray-900 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image src={icon} alt={title} width={100} height={100} />
        <h3 className="text-white text-[20px] font-bold text-center mt-4">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
