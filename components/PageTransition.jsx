"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const currentPath = usePathname();
  return (
    <AnimatePresence>
      <div key={currentPath}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.3, duration: 0.3, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-white top-0 pointer-events-none"
        ></motion.div>
      </div>
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;
