/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardFooter } from "@/src/components/ui/card";
import { Typography } from "@/src/components/ui/typography";
import { AccordionForm } from "@/src/features/components/accordion";
import { CompareSlider } from "@/src/features/components/compare-slider";
import { DescribeCompText } from "@/src/features/components/describe-comp-text";
import { Hero } from "@/src/features/components/hero";
import { SimpleImage } from "@/src/features/components/simple-image";
import { ValuePropCompText } from "@/src/features/components/value-prop-comp-text";
import { LayoutCardItem } from "@/src/features/layout/layout-card-item";
import LayoutModule from "@/src/features/layout/layout-module";
import Image from "next/image";
import Link from "next/link";
import { HiOutlinePencil } from "react-icons/hi2";
import { PiAtomThin, PiFlowerLight } from "react-icons/pi";
const ServiceTeamBuildingPage = () => {
  return (
    <div className="bg-gradient-to-r from-rose-100 from-0% via-white via-50% to-rose-100 to-100% pb-10">
      <Hero
        backgroundImageHref={"/image/hero-seminaire.png"}
        titreHero={"Un team building pour "}
        sousTitreHero={
          " Fédérez vos équipes au cours d’un atelier créatif et artistique."
        }
        buttonHero={"Devis sur mesure ☞"}
        hrefButtonHero={"/devis"}
        typeWriter1={"votre équipe"}
        typeWriter2={"votre bien être"}
        typeWriter3={"vous ☞"}
      />
      <LayoutModule title="Les supers avantages " className="">
        <LayoutCardItem>
          <DescribeCompText
            className="flex xl:items-start xl:text-start text-center items-center"
            title={"Les objectifs du team building"}
            title2={"A vos marques !"}
            list1={"Travailler ensemble pour créer un moment inoubliable ❤️‍🔥"}
            list2={"Challenger la créativité de vos employés 🎨"}
            list3={"Renforcer les liens au sein du groupe 💙"}
            buttonText={"Découvrez nos artistes ☞"}
            buttonHref={"/artistes?tag=Team Building"}
          />
          <SimpleImage
            image={
              "https://images.pexels.com/photos/1322183/pexels-photo-1322183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt={""}
            size={"md:h-[350px] h-[190px]"}
          />
        </LayoutCardItem>
        <LayoutCardItem className={"border-t-0"}>
          <CompareSlider
            className={"xl:h-[375px]"}
            altImage1={"Pas de tableaux dans l'entreprise"}
            srciImage1={"/image/sans-tableau-entreprise.png"}
            altImage2={"Tableaux dans l'entreprise"}
            srciImage2={"/image/tableau-entreprise.png"}
          />
          <DescribeCompText
            className=" flex xl:items-end xl:text-end text-center items-center"
            title={"Vos équipes vont adorer"}
            title2={"Prêt ?"}
            list1={"Créer des œuvres autour de vos valeurs 🤝"}
            list2={"Découvrir une nouvelle manière de faire équipe 🧠"}
            list3={"Découvrir un artiste et son histoire 👨🏻‍🎨"}
            buttonText={"Découvrez les avantages ☞"}
            buttonHref={"/blogs?tag=Art"}
          />
        </LayoutCardItem>
        <LayoutCardItem className={"border-t-0"}>
          <DescribeCompText
            className="flex xl:items-start xl:text-start text-center items-center"
            title={"Les compétences acquises !"}
            title2={"Peignez 🖌️"}
            list1={
              "Faire équipe dans un projet créatif pour atteindre un but commun ⏱️"
            }
            list2={"Communiquer et s’écouter pour co-créer l’oeuvre idéale 🖼️"}
            list3={
              "Faire ressortir sa créativité, et chercher l’inspiration ! 👓"
            }
            buttonText={"Devis gratuit et rapide ☞"}
            buttonHref={"/devis"}
          />
          <SimpleImage
            image={"/image/hero-seminaire.png"}
            alt={"Personnes heureuses en entreprise"}
            className={"pb-0 mb-0"}
            size={"md:h-[350px] h-[190px]"}
          />
        </LayoutCardItem>
      </LayoutModule>{" "}
      <LayoutModule title="Les activités" className="xl:flex-row">
        <LayoutCardItem>
          <ValuePropCompText
            className="xl:border-r xl:border-b-0 border-b"
            icon={
              <PiFlowerLight className=" text-4xl hover:scale-105 transition duration-700 ease-in-out" />
            }
            title={"Brainstorming avec le plasticien "}
            text={
              <Typography variant={"p"}>
                Faire jaillir dans{" "}
                <strong>l’équipe les idées les plus innovantes selon</strong>
                un thème déterminé : « cohésion au travail, rôle du manager,
                bien-être au travail ! »
              </Typography>
            }
          ></ValuePropCompText>
          <ValuePropCompText
            className="xl:border-r xl:border-b-0 border-b"
            title={"Co-création de l'oeuvre"}
            text={
              <Typography variant={"p"}>
                {" "}
                Les coachs plasticiens sont là pour offrir des conseils et une
                orientation artistique tout au long du processus.{" "}
                <strong>Leur expertise aide les équipes à se dépasser !</strong>
              </Typography>
            }
            icon={
              <PiAtomThin className="text-4xl hover:scale-105 transition duration-700 ease-in-out" />
            }
          ></ValuePropCompText>
          <ValuePropCompText
            className={"xl:border-r-0 m-0"}
            title={"Le vernissage de fin"}
            text={
              <Typography variant={"p"}>
                {" "}
                L'événement se termine par un vernissage où{" "}
                <strong>
                  chaque équipe présente son œuvre, partageant son thème et son
                  interprétation
                </strong>
                avec les autres participants.
              </Typography>
            }
            icon={
              <HiOutlinePencil className=" text-4xl hover:scale-105 transition duration-700 ease-in-out" />
            }
          ></ValuePropCompText>
        </LayoutCardItem>
      </LayoutModule>
      <LayoutModule title={"En amont"}>
        <LayoutCardItem className={""}>
          <DescribeCompText
            className="flex xl:items-start xl:text-start text-center items-center"
            title={""}
            title2={"Le choix de l'artiste directement sur le site..."}
            list1={"Choisissez un artiste representant le mieux vos valeurs ✅"}
            list2={
              "Faites participer vos employés pour le choix final de l'artiste 👨🏻‍🎨"
            }
            list3={"On vous rappelle et on fait le point 🤝"}
            buttonText={"Decouvrez nos artistes ☞"}
            buttonHref={"/artistes?tag=Team Building"}
          />
          <SimpleImage
            image={"/image/artistes.png"}
            alt={"Artistes peintres"}
            className={"border-none shadow-none "}
            size={"md:h-[350px] h-[190px]"}
          />
        </LayoutCardItem>
        <LayoutCardItem className={"border-t-0"}>
          <SimpleImage
            image={"/image/devis.png"}
            alt={"Devis"}
            className={"border-none shadow-none "}
            size={"md:h-[350px] h-[190px]"}
          />
          <DescribeCompText
            className=" flex xl:items-end xl:text-end text-center items-center"
            title={""}
            title2={"...ou remplissez un devis et on vous propose un artiste"}
            list1={"Complétez le devis en 1 min ⏱️"}
            list2={
              "On vous présente l'artiste parfait en fonction de vos réponses 🤩"
            }
            list3={
              "On fixe le jour J et l'artiste parfait pour vous, ainsi qu'un thème vous tenant à coeur ♥️"
            }
            buttonText={"Devis gratuit et rapide ☞"}
            buttonHref={"/devis"}
          />
        </LayoutCardItem>
      </LayoutModule>
      <LayoutModule title={"Ils nous soutiennent"}>
        <LayoutCardItem>
          <Card className="my-10 flex justify-center items-center">
            <Image
              src={"/icon/bpifrance.png"}
              alt={""}
              width={"100"}
              height={"100"}
            ></Image>
          </Card>
          <Card className="my-10 flex justify-center items-center">
            <Image
              src={"/icon/emlyon.png"}
              alt={""}
              width={"100"}
              height={"100"}
            ></Image>
          </Card>
          <Card className="my-10 flex justify-center items-center">
            <Image
              src={"/icon/laruche.png"}
              alt={""}
              width={"100"}
              height={"100"}
            ></Image>
          </Card>
          <Card className="my-10 flex justify-center items-center">
            <Image
              src={"/icon/pepite.png"}
              alt={""}
              width={"100"}
              height={"100"}
            ></Image>
          </Card>
        </LayoutCardItem>
      </LayoutModule>
      <LayoutModule title={"F.A.Q"}>
        <LayoutCardItem>
          <Card>
            <CardContent className="pt-10">
              <Typography variant="h1">
                Vous voulez en savoir plus ?{" "}
              </Typography>{" "}
            </CardContent>
            <CardFooter className="flex items-center justify-center ">
              <Link href="/rendez-vous">
                <Button variant="fyliaButtonBlue">
                  Je souhaite prendre un rendez vous !
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <AccordionForm
            question1={"Quelle est la localisation des teams buildings ? "}
            reponse1={"A ce jour, uniquement à Marseille et ses alentours !"}
            question2={"Quel est le prix d'un team building ?"}
            reponse2={
              "Nous pouvons compter à partir de 60 euros par personnes. Le prix varie en fonction du nombre de toile et du temps de prestation"
            }
            question3={"Combien de temps pour un team-building?"}
            reponse3={
              "La durée d'un team building peut varier de 2h à une demi journée."
            }
            question4={"Comment sont sélectionnés vos artistes ?"}
            reponse4={
              "Nous sélectionnons nos artistes après les avoir rencontrés à plusieurs reprises personnellement. Nous proposons uniquement des artistes originaires de votre région, chacun spécialisé dans des types d'art bien distincts."
            }
            question5={"Ou se déroule le team building ?"}
            reponse5={
              "Qu'il s'agisse de votre entreprise, d'un parc ou d’un atelier d’artiste, nous saurons dénicher pour vous un lieu propice à la créativité "
            }
          />
        </LayoutCardItem>
      </LayoutModule>
    </div>
  );
};

export default ServiceTeamBuildingPage;
