"use client";
import { motion } from "framer-motion";
export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.5, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="absolute top-30 left-0 b-0 r-0 w-full h-full bg-white xl:p-1 border-[10px] border-t-[20px] rounded-[18px] xl:border-[40px] xl:rounded-[48px] border-black">
        <div className="absolute top-[-28px] left-0 w-full h-10 text-center">
          <span className="text-xs text-white xl:hidden animate-pulse">
            Ceci est la version mobile de la tablette accessible par vos client
            sur leurs smartphones
          </span>
        </div>
        <iframe
          src="https://projexion3d.fr/tablette/SAGEC_CAPBRETON"
          className="w-full h-full"
        />
      </div>
    </motion.div>
  );
}
