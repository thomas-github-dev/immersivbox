"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const info_tablette = [
  {
    img: "/smart-devices.png",
    title: "AUTONOMIE TOTALE",
    desc: "Installée sur vos chantiers, l'ImmersivBox fonctionne de manière indépendante, disponible 24/7 pour vos prospects.",
  },
  {
    img: "/easy-to-use.png",
    title: "ACCESSIBILITÉ UNIVERSELLE",
    desc: "Une interface intuitive pour tous, accessible même sans expertise technique.",
  },
  {
    img: "/innovation.png",
    title: "MODERNITÉ ET INNOVATION",
    desc: "Une solution clé en main qui combine technologie immersive, design élégant et efficacité commerciale.",
  },
  {
    img: "/diagram.png",
    title: "ACCÉLÉRATION DES VENTES",
    desc: "Facilite la projection des futurs acquéreurs et réduit les délais de commercialisation.",
  },
];

const info_tablette_end = [
  {
    img: "/map.png",
    title: "VISITE VIRTUELLE DU QUARTIER",
    desc: "Explorez l'environnement du projet grâce à une visite immersive du quartier, ses infrastructures et ses points d’intérêt.",
  },
  {
    img: "/surveillance.png",
    title: "VISITE VIRTUELLE INTÉRIEURE",
    desc: "Plongez dans l’intérieur des logements grâce à une visite immersive 3D réaliste.",
  },
  {
    img: "/attendance.png",
    title: "DISPONIBILITÉ ET INFORMATIONS DES LOTS",
    desc: "Consultez en temps réel les appartements ou maisons disponibles, leurs caractéristiques et les biens déjà réservés.",
  },
  {
    img: "/budget.png",
    title: "CAPACITÉ DE FINANCEMENT",
    desc: "Évaluez rapidement votre capacité de financement et découvrez les options adaptées à votre projet.",
  },
  {
    img: "/schedule.png",
    title: "APPEL OU PRISE DE RENDEZ-VOUS",
    desc: "Contactez directement le promoteur ou planifiez un rendez-vous en un clic.",
  },
];

const Contact = () => {
  const [url_box, setUrlBox] = React.useState("/immersivBox_BLACK.jpg");

  function handleClick(e, color) {
    if (color === "white") setUrlBox("/immersivBox_WHITE.jpg");
    else setUrlBox("/immersivBox_BLACK.jpg");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.5, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="w-full  mb-10">
        <div className="flex flex-col xl:flex-row gap-12 mt-5 container p-10 mx-auto">
          <div className="w-full xl:w-[40%] align-middle justify-center content-center items-center">
            <Image
              src={url_box}
              alt="l'equipe"
              width={0}
              height={0}
              sizes="100vw"
              className="block object-contain max-h-[400px] xl:max-h-[600px] mx-auto"
              style={{ width: "auto", height: "auto" }}
            />
            <div className="w-full flex-row gap-8 content-center text-center  inline-flex flex-wrap items-center justify-center">
              <Button
                className="border-accent border-5 rounded-[50px] hover:bg-white hover:text-accent"
                onClick={(e) => {
                  handleClick(e, "white");
                }}
              >
                Blanc
              </Button>
              <Button
                href="/"
                className="border-accent border-5 rounded-[50px] hover:bg-white hover:text-accent"
                onClick={(e) => {
                  handleClick(e, "black");
                }}
              >
                Noir
              </Button>
            </div>
          </div>
          <div className="w-full xl:w-[60%] xl:h-[54%] flex-1 order-2 xl:order-none text-center xl:text-left">
            <h1 className=" text-accent text-[30px]">
              Contactez-nous pour booster vos ventes.
            </h1>
            <h2 className=" text-accent text-[18px] font-bold underline">
              À partir de 500€/mois*
            </h2>

            {info_tablette.map((inf, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col xl:flex-row gap-3 xl:gap-10 justify-start content-center items-center mt-10"
                >
                  <div className="w-[80px] block content-center items-center justify-center text-center">
                    <img
                      src={inf.img}
                      alt="agg"
                      style={{
                        width: "60px",
                        height: "60px",
                      }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 text-center xl:text-left">
                    <span className="text-accent text-[18px] font-bold">
                      {inf.title}
                    </span>

                    <span className="text-accent text-[17px]  ">
                      {inf.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full mt-10 bg-black">
          <div className="flex flex-col xl:flex-row  mx-auto  p-20 gap-5 align-middle justify-between content-start items-start  text-left">
            <h2 className="text-white text-[60px] leading-[50px] font-bold">
              L’immersivBox.
            </h2>
            <div className="w-[150px]"></div>
            <span className="text-white text-[15px]">
              <span className="font-bold">
                <br />
                ImmersivBox
              </span>{" "}
              une solution immersive et autonome qui révolutionne la
              présentation immobilière.
              <br />
              <br /> Conçue pour les promoteurs et les acquéreurs, cette box
              interactive permet de visualiser et d’explorer les projets
              immobiliers comme si vous y étiez.
              <br />
              <br /> Alliant technologie de pointe et simplicité, ImmersivBox
              crée une expérience captivante et engageante.
            </span>
          </div>
        </div>

        <div className="parentDiv  mt-10  text-sm mx-auto  relative w-full  inline-flex flex-wrap items-start justify-center p-4 xl:p-6 gap-10 xl:gap-20">
          {info_tablette_end.map((inf, index) => {
            return (
              <div
                key={index}
                className="flex flex-col  gap-3  justify-start content-center items-center align-top lg:w-[200px] xl:w-[200px] w-full"
              >
                <div className=" block content-center items-center justify-center text-center h-[60px] ">
                  <img
                    src={inf.img}
                    alt="agg"
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 text-center mt-5">
                  <span className="text-accent text-[15px] font-bold">
                    {inf.title}
                  </span>

                  <span className="text-accent text-[13px]  ">{inf.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
