"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function boldString(str, substr) {
  var strRegExp = new RegExp(substr, "g");
  return str.replace(strRegExp, "<b>" + substr + "</b>");
}

const info_tablette = [
  {
    img: "/diagram.png",
    title: "Technologie de pointe pour capter des leads qualifiés",
    desc: "",
  },
  {
    img: "/innovation.png",
    title: "Une expérience client innovante et immersive",
    desc: "",
  },
  {
    img: "/easy-to-use.png",
    title: "Autonomie des futurs acquéreurs",
    desc: "",
  },
  {
    img: "/smart-devices.png",
    title: "Disponibilité 24/7 pour une prise de contact sans limite",
    desc: "",
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
  /*{
    img: "/schedule.png",
    title: "APPEL OU PRISE DE RENDEZ-VOUS",
    desc: "Contactez directement le promoteur ou planifiez un rendez-vous en un clic.",
  },*/
];

const Contact = () => {
  const [url_box, setUrlBox] = React.useState("/fond_decouvrez_01-noir.jpg");

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { url: "/decouvrez_animbox-01.jpg" },
    { url: "/decouvrez_animbox-02.jpg" },
    { url: "/decouvrez_animbox-03.jpg" },
    { url: "/decouvrez_animbox-04.jpg" },
  ];

  const nextSlide = () => {
    setCurrentImage((next) => (next === images.length - 1 ? 0 : next + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(interval);
  }, [currentImage]);

  function handleClick(e, color) {
    if (color === "white") setUrlBox("/fond_decouvrez_01-blanc.jpg");
    else setUrlBox("/fond_decouvrez_01-noir.jpg");
  }

  /*  */

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.5, ease: "easeIn" },
      }}
      className=""
    >
      <div className="w-full  overflow-x-hidden">
        <div
          className="relative bg-top bg-cover bg-no-repeat h-[1344px] overflow-x-hidden"
          style={{
            backgroundImage: `url('${url_box}')`,
          }}
        >
          <div className="absolute top-[730px] left-[50%] translate-x-[-290%] text-accent text-[18px] ">
            A PARTIR DE 500 € HT / MOIS
          </div>
          <div
            key="change_color"
            className="absolute top-[550px] w-[190px] left-[50%] translate-x-[-240%] text-accent text-[16px] flex flex-col gap-4 "
          >
            <div className="flex flex-row content-center items-center justify-start  text-center">
              <button
                className="  bg-white hover:border-0 w-[40px] h-[40px] border-accent border-1"
                onClick={(e) => {
                  handleClick(e, "white");
                }}
                style={{ border: "1px solid black" }}
              ></button>{" "}
              &nbsp;&nbsp;BOX BLANCHE
            </div>
            <div className="flex flex-row content-center items-center justify-start text-center">
              <button
                href="/"
                className=" bg-black hover:border-0 w-[40px] h-[40px] border-accent border-1 "
                onClick={(e) => {
                  handleClick(e, "black");
                }}
              ></button>
              &nbsp;&nbsp;BOX NOIR
            </div>
          </div>
          <div className="absolute left-[50%] translate-x-[-20%] top-[325px] w-[950px] flex-1 order-2 xl:order-none text-center xl:text-left pr-3 ">
            {info_tablette.map((inf, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col xl:flex-row gap-3  justify-start content-center items-center mt-7"
                >
                  <div
                    key={index + "_4546511"}
                    className="w-[80px] block content-center items-center justify-center text-center"
                  >
                    <img
                      src={inf.img}
                      alt="agg"
                      style={{
                        width: "60px",
                        height: "60px",
                      }}
                    />
                  </div>
                  <div
                    key={index + "_4545446511"}
                    className="flex flex-1 flex-col gap-3 text-center xl:text-left"
                  >
                    <span className="text-accent text-[18px] uppercase ">
                      {inf.title}
                    </span>

                    <span className="text-accent text-[16px] leading-[22px]">
                      {index == 0 && (
                        <span>
                          Équipée d’une tablette configurée sur mesure,
                          l’ImmersivBox collecte des <b>leads qualifiés</b> en
                          simplifiant le parcours des futurs acquéreurs. Avec
                          des{" "}
                          <b>interfaces intuitives et des outils interactifs</b>
                          , chaque interaction devient une{" "}
                          <b>opportunité d'engagement</b>, tout en reflétant
                          votre usage des technologies les plus avancées pour
                          séduire vos clients.
                        </span>
                      )}
                      {index == 1 && (
                        <span>
                          Avec une immersion totale dans vos projets grâce à des
                          <b>visuels 3D réalistes et interactifs</b>,
                          l’ImmersivBox révolutionne la manière dont vos clients
                          découvrent leur futur logement. Cette expérience
                          unique améliore l’engagement et crée une{" "}
                          <b>relation émotionnelle forte avec vos projets</b>.
                        </span>
                      )}
                      {index == 2 && (
                        <span>
                          Grâce à l'ImmersivBox, vos prospects accèdent en{" "}
                          <b>toute autonomie</b> à des informations précises et
                          détaillées sur vos projets, directement sur site. En
                          explorant
                          <b>
                            les plans, les aménagements, et les perspectives en
                            3D
                          </b>
                          , ils visualisent et comprennent rapidement le
                          potentiel de leur futur logement, sans nécessiter la
                          présence d'un commercial.
                        </span>
                      )}
                      {index == 3 && (
                        <span>
                          L’ImmersivBox garantit une{" "}
                          <b>présence continue sur vos chantiers</b>, offrant
                          une prise de contact accessible 24 heures sur 24, 7
                          jours sur 7. Vos projets restent
                          <b>visibles et attractifs</b>, même en dehors des
                          horaires classiques, maximisant ainsi vos chances de
                          transformer des <b>visiteurs en acheteurs</b>.
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full bg-black/80 mb-0 bottom-[0px] absolute">
            <div className="left-[50%] relative translate-x-[-50%] inline-block p-20 text-left">
              <h2 className="text-white text-[30px] leading-[50px] uppercase ">
                En quoi cela fait la différence pour vous ?
              </h2>
              <ul className="text-white text-[12px] list-disc leading-[50px] inline-block">
                <li>
                  <span className="text-[22px] font-bold">
                    Accélération du processus de vente
                  </span>{" "}
                  : Une visibilité constante qui{" "}
                  <b>multiplie les opportunités</b>.
                </li>
                <li>
                  <span className="text-[22px] font-bold">
                    Optimisation des ressources
                  </span>
                  : Une solution autonome qui <b>allège</b> la présence sur site
                  de votre <b>équipe commerciale</b>.
                </li>
                <li>
                  <span className="text-[22px] font-bold">
                    Image moderne et différenciante
                  </span>
                  : Montrez que vous êtes à la pointe de l’<b>innovation</b> en
                  proposant une solution <b>high-tech</b> qui attire et
                  convertit efficacement.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          key="decouv"
          className="bg-top bg-cover bg-no-repeat h-[928px] overflow-hidden relative"
          style={{
            backgroundImage: `url('/fond_decouvrez_02.jpg')`,
          }}
        >
          <div
            key="title"
            className="absolute top-[10px] left-[50px]   text-accent text-[30px] text-center"
          >
            CONTACTEZ-NOUS POUR BOOSTER VOS VENTES
          </div>
          <div className="absolute top-[480px] left-[50%] translate-x-[-330%] text-accent w-[149px] ">
            <a href="/fond_decouvrez_02.jpg" target="_blank">
              <Image
                src="/decouvrez_demande_plaquette.png"
                width={149}
                height={66}
              ></Image>
            </a>
          </div>

          <div
            key="info_tablette"
            className="absolute top-[240px] w-[1400px] left-[50%] translate-x-[-22%] text-sm  inline-flex flex-wrap justify-center content-center items-center align-middle border-1 border-black "
          >
            {info_tablette_end.map((inf, index) => {
              return (
                <>
                  <div
                    key={index + "_35656"}
                    className="flex flex-col  gap-3  justify-start content-center items-center align-top w-[295px] h-[295px] border-accent/75 border-2 p-5 rounded-[50%] mt-[-50px]"
                  >
                    <div className=" block content-center items-center justify-center text-center h-[60px] mt-2">
                      <img
                        src={inf.img}
                        alt="ag g"
                        style={{
                          width: "60px",
                          height: "60px",
                        }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 text-center mt-2 w-[200px]">
                      <span className="text-accent text-[15px] font-bold">
                        {inf.title}
                      </span>

                      <span className="text-accent text-[13px]  ">
                        {inf.desc}
                      </span>
                    </div>
                  </div>
                  {(index == 0 || index == 2) && (
                    <div
                      key={index + "_line"}
                      className="h-[2px] bg-accent/75 w-[200px] mt-[-50px]"
                    ></div>
                  )}
                  {index == 1 && (
                    <div key={index + "_line"} className="w-[500px] "></div>
                  )}
                </>
              );
            })}
          </div>
          <div
            key="info_tablette_appel"
            className="absolute top-[420px] w-[1400px] left-[50%] translate-x-[-97%] text-sm  inline-flex flex-wrap justify-center content-center items-center align-middle border-1 border-black "
          >
            <div
              key="oipoipo"
              className="flex flex-col  gap-3  justify-start content-center items-center align-top w-[215px] h-[295px]"
            >
              <div className=" block content-center items-center justify-center text-center h-[60px] mt-2">
                <img
                  src="/schedule.png"
                  alt="ag g"
                  style={{
                    width: "60px",
                    height: "60px",
                  }}
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 text-center mt-2 w-[140px]">
                <span className="text-accent text-[15px] font-bold">
                  APPEL OU PRISE DE RENDEZ-VOUS
                </span>

                <span className="text-accent text-[13px]  ">
                  Contactez directement le promoteur ou planifiez un rendez-vous
                  en un clic.
                </span>
              </div>
            </div>
          </div>

          <div className="w-full bg-black/80 mb-0 bottom-[0px] absolute">
            <div className="left-[50%] relative translate-x-[-50%] inline-block p-5 text-left">
              <ul className="text-white text-[12px] list-disc leading-[40px]">
                <li>
                  ImmersivBox une <b>solution immersive et autonome</b> qui
                  révolutionne la présentation immobilière.
                </li>
                <li>
                  Conçue pour les <b>promoteurs et les acquéreurs</b>, cette box
                  interactive permet de <b>visualiser et d’explorer</b> les
                  projets immobiliers comme si vous y étiez.
                </li>
                <li>
                  Alliant <b>technologie de pointe et simplicité</b>,
                  ImmersivBox crée une expérience{" "}
                  <b>captivante et engageante</b>.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          key="decouv_3"
          className="bg-top bg-cover bg-no-repeat h-[947px] relative "
          style={{
            backgroundImage: `url('/fond_decouvrez_03.jpg')`,
          }}
        >
          <div className="absolute top-[10px] left-[50%] translate-x-[-50%]  text-accent text-[30px] text-center">
            REJOIGNEZ-NOUS
          </div>

          <div className="h-[364px] w-[361px] absolute top-[258px] left-[50%] translate-x-[-50%]">
            <div
              style={{
                backgroundImage: `url(${images[currentImage].url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full h-full bg-center bg-cover duration-500"
            ></div>
            <div
              style={{
                backgroundImage: `url('/decouvrez_animbox-mask.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full h-full bg-center bg-cover duration-500 absolute top-0 left-0"
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
