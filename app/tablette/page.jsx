"use client";
import { animate, motion } from "framer-motion";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
export default function Page() {
  function handleClick(e, sens) {
    console.log(sens);
    e.preventDefault();
    if (sens == "top") {
      animate([
        [".div_parent", { marginTop: -80 }, { duration: 0.5, delay: 0.05 }],
        [
          ".bouton_up",
          { opacity: 0, zIndex: 0 },
          { duration: 0.5, delay: 0.05 },
        ],
        [
          ".bouton_close",
          { opacity: 1, zIndex: 30 },
          { duration: 0.1, delay: 0.05 },
        ],
      ]);
    } else {
      animate([
        [".div_parent", { marginTop: 0 }, { duration: 0.5, delay: 0.05 }],
        [
          ".bouton_close",
          { opacity: 0, zIndex: 0 },
          { duration: 0.5, delay: 0.05 },
        ],
        [
          ".bouton_up",
          { opacity: 1, zIndex: 30 },
          { duration: 0.1, delay: 0.05 },
        ],
      ]);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,

        transition: { delay: 0.3, duration: 0.9, ease: "easeIn" },
      }}
      className="div_parent"
    >
      <div className="absolute top-30 left-0 b-0 r-0 w-full h-full bg-white xl:p-1 border-[15px] border-t-[30px] rounded-[18px] xl:border-[40px] xl:rounded-[48px] border-black ">
        <div className="bouton_close absolute top-[-35px] xl:top-[-40px] right-[0px] h-10 text-center text-white z-30 opacity-0">
          <a
            href="#"
            onClick={(e) => {
              handleClick(e, "down");
            }}
          >
            <IoIosArrowDropdownCircle className="m-auto" size="2.5em" />
          </a>
        </div>
        <div className="bouton_up absolute top-[-35px] xl:top-[-40px] right-[0px] h-10 text-center text-white z-30 ">
          <a
            href="#"
            onClick={(e) => {
              handleClick(e, "top");
            }}
          >
            <IoIosArrowDropupCircle className="m-auto" size="2.5em" />
          </a>
        </div>

        <div className="absolute top-[-34px] left-0 w-full h-10 text-center">
          <span className="text-xs text-white xl:hidden animate-pulse">
            Ceci est la version mobile de la tablette accessible sur smartphone
          </span>
        </div>
        <iframe
          src="https://projexion3d.fr/tablette/DEMO"
          className="w-full h-full z-10"
        />
      </div>
    </motion.div>
  );
}
