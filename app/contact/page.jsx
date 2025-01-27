"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Téléphone",
    desc: "+33 6 89 72 30 38",
  },
  {
    icon: <FaEnvelope />,
    title: "Mail",
    desc: "ulrich@devenais3d.fr",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.5, ease: "easeIn" },
      }}
      className=""
    >
      <div className="w-full xl:top-0 overflow-x-hidden">
        <div
          className="relative  bg-top  xl:bg-cover bg-no-repeat  overflow-x-hidden mt-2 xl:mt-0 "
          style={{
            backgroundImage: `url('/fond_contact.png')`,
          }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-white xl:hidden z-0"></div>
          <div className="relative container mx-auto mb-10 mt-2 xl:mt-[110px] z-10">
            <div className="flex flex-col gap-3 xl:mb-10 pb-10 align-middle justify-center content-center items-center mx-auto text-center">
              <h1 className=" text-accent text-[35px] xl:text-[50px]">
                Réservez votre ImmersivBox
              </h1>
              <h2 className=" text-accent text-[25px]">
                Contactez-nous pour découvrir comment l'ImmersivBox peut
                transformer vos ventes.
              </h2>
            </div>

            <div className="flex flex-col xl:flex-row gap-12 mt-5">
              <div className="flex-1 align-middle justify-center content-center items-center">
                <Image
                  src="/commerciale.jpg"
                  alt="l'equipe commerciale"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="block object-contain max-h-[400px] xl:max-h-[800px] mx-auto"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="xl:h-[54%] flex-1 order-2 xl:order-none">
                <form
                  className="flex flex-col gap-6 mb-5 "
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="grid w-full max-w-sm items-center gap-1.5 text-accent">
                      <Label htmlFor="email">Prénom</Label>
                      <Input
                        id="form-prenom"
                        name="prenom"
                        type="prenom"
                        required
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 text-accent">
                      <Label htmlFor="email">Nom</Label>
                      <Input
                        id="form-nom"
                        name="nom"
                        type="nom"
                        required
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 text-accent">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="form-email"
                        name="email"
                        type="email"
                        required
                        placeholder="Votre mail"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 text-accent">
                      <Label htmlFor="email">Télephone</Label>
                      <Input
                        id="form-telephone"
                        name="telephone"
                        type="telephone"
                        required
                        placeholder="Votre numéro de téléphone"
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5 text-accent">
                    <Label htmlFor="email">Message</Label>
                    <textarea
                      name="message_cli"
                      className="h-[200px]  border border-accent/40 focus:border-accent font-light outline-none bg-white px-4 py-5 text-base placeholder:text-textprinc/60 "
                      placeholder="Votre message"
                    />
                  </div>

                  <Button size="" className="max-w-60 ml-auto" type="submit">
                    Envoi message
                  </Button>
                </form>
                <div className="flex-1 flex items-center xl:justify-start order-1 xl:order-none mt-5 xl:mt-10 ">
                  <ul className="flex flex-col gap-6">
                    {info.map((inf, index) => {
                      return (
                        <li
                          key={index + "_456456132"}
                          className="flex items-center gap-5"
                        >
                          <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-accent text-white rounded-md flex items-center justify-center">
                            <div>{inf.icon}</div>
                          </div>
                          <div>
                            <p className="text-textprinc/60">{inf.title}</p>
                            <h3 className="text-xl">{inf.desc}</h3>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
