/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Typography } from "@/src/components/ui/typography";
import { AccordionForm } from "@/src/features/components/accordion";
import { Banner } from "@/src/features/components/banner";
import { AlertCalendlyPage } from "@/src/features/components/calendly";
import { CompareSlider } from "@/src/features/components/compare-slider";
import { DescribeCompText } from "@/src/features/components/describe-comp-text";
import { Hero } from "@/src/features/components/hero";
import { SimpleImage } from "@/src/features/components/simple-image";
import { ValuePropCompText } from "@/src/features/components/value-prop-comp-text";
import { LayoutCardItem } from "@/src/features/layout/layout-card-item";
import LayoutModule from "@/src/features/layout/layout-module";
import Link from "next/link";
import { HiOutlinePencil } from "react-icons/hi2";
import { PiAtomThin, PiFlowerLight } from "react-icons/pi";

const ServiceFresquePage = () => {
  return (
    <>
      <Hero
        backgroundImageHref={"/image/hero-fresque.png"}
        titreHero={"Une fresque à l'image de "}
        sousTitreHero={
          " Nos artistes locaux participent à créer une atmosphère de bien-être au travail."
        }
        buttonHero={"Devis sur mesure ☞"}
        hrefButtonHero={"/devis"}
        typeWriter1={"vos valeurs"}
        typeWriter2={"votre équipe"}
        typeWriter3={"vos locaux"}
        hrefSwapLink={""}
      />
      <LayoutModule title="Déroulement" className="">
        <LayoutCardItem>
          <DescribeCompText
            className="flex xl:items-start xl:text-start text-center items-center"
            title={"Les objectifs de la fresque sur mesure"}
            title2={"A vos marques !"}
            list1={
              "Idéation ensemble pour une création original à haute valeur ❤️‍🔥"
            }
            list2={"Mettre en avant les valeurs de chacun 🎙️"}
            list3={"Renforcer le lien du groupe ⌇"}
            buttonText={"Découvrez les avantages ☞"}
            buttonHref={"/blogs?tag=Art"}
          />
          <SimpleImage
            image={
              "https://images.unsplash.com/photo-1602523234795-79b314354618?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={""}
            size={"md:h-[350px] h-[190px]"}
          />
        </LayoutCardItem>
        <LayoutCardItem className={"border-t-0"}>
          <CompareSlider
            className={"xl:h-[375px]"}
            altImage1={"Fresque en entreprise"}
            srciImage1={"/image/fresque-entreprise.png"}
            altImage2={"Mur simple et terne entreprise"}
            srciImage2={"/image/sans-fresque-entreprise.png"}
          />
          <DescribeCompText
            className=" flex xl:items-end xl:text-end text-center items-center"
            title={" Vos équipes vont adorer"}
            title2={"Pret ?"}
            list1={"Partager leurs valeurs clés 🔑"}
            list2={"Voir qu’ils sont écoutés 🎁"}
            list3={"Découvrir un artiste, son style et son histoire 👨🏻‍🎨"}
            buttonText={"Découvrez les avantages ☞"}
            buttonHref={"/blogs?tag=Art"}
          />
        </LayoutCardItem>
        <LayoutCardItem className={"border-t-0"}>
          <DescribeCompText
            className="flex xl:items-start xl:text-start text-center items-center"
            title={" Ce que vous apprenez !"}
            title2={"Peignez ☞"}
            list1={
              "S’organiser en équipe pour atteindre un objectif commun tout en respectant le timing imposé ⏱️"
            }
            list2={"Embellir vos lieux de travail 🤩"}
            list3={"Rendre votre groupe plus productif et créatif 🤝"}
            buttonText={"Decouvrez les avantages ☞"}
            buttonHref={"/blogs?tag=Art"}
          />
          <SimpleImage
            image={"/image/hero-fresque.png"}
            alt={"Personnes heureuses en entreprise"}
            className={"pb-0 mb-0"}
            size={"md:h-[350px] h-[190px]"}
          />
        </LayoutCardItem>
      </LayoutModule>{" "}
      <LayoutModule title={"Déroulement en amont"}>
        <LayoutCardItem className={"flex items-center justify-between"}>
          <Card className="m-1 flex items-center justify-center flex-col">
            <CardHeader>
              <CardTitle>
                Le choix de l'artiste directement sur le site...
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Typography variant={"p"}>
                Choisissez un artiste représentant le mieux vos valeurs ✅
              </Typography>
              <Typography variant={"p"}>
                Faites participer les employés pour le choix final de l'artiste
                👨🏻‍🎨
              </Typography>
              <Typography variant={"p"}>
                On vous rappelle, et on fait le point 🤝
              </Typography>
            </CardContent>
            <CardFooter>
              <Link href={"/artiste?tag=Fresque"}>
                <Button variant={"fyliaButtonBlue"}>
                  Choissiez un artiste ☞
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </LayoutCardItem>
        <LayoutCardItem className={" border-t-0"}>
          <Card className="m-1 flex items-center justify-center flex-col">
            <CardHeader>
              <CardTitle>
                ...ou remplissez le devis et on vous propose un artiste
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Typography variant={"p"}>
                Completez le devis en 1 min ⏱️
              </Typography>
              <Typography variant={"p"}>
                On vous présente l'artiste parfait en fontion de vos réponses 👨🏻‍🎨
              </Typography>
              <Typography variant={"p"}>
                On fixe le jour J et l’artiste qui interviendra, ainsi qu’un
                thême vous tenant à coeur ❤️
              </Typography>
            </CardContent>
            <CardFooter>
              <Link href={"/devis"}>
                <Button variant={"fyliaButtonBlue"}>
                  Devis gratuit et rapide ☞
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </LayoutCardItem>
      </LayoutModule>
      <LayoutModule title="Les activités" className="xl:flex-row">
        <LayoutCardItem>
          <ValuePropCompText
            className="xl:border-r xl:border-b-0 border-b"
            icon={
              <PiFlowerLight className=" text-4xl hover:scale-105 transition duration-700 ease-in-out" />
            }
            title={" Planification et Conception :"}
            text={
              <Typography variant={"p"}>
                Les employés se réunissent pour partager leurs idées et
                esquissent des concepts initiaux, favorisant ainsi la
                collaboration et l'engagement de toute l'équipe dans le
                processus créatif.
              </Typography>
            }
          ></ValuePropCompText>
          <ValuePropCompText
            className="xl:border-r xl:border-b-0 border-b"
            title={"Réalisation Artistique :"}
            text={
              <Typography variant={"p"}>
                {" "}
                Sous la direction d'un artiste professionnel ou en équipe, les
                employés mettent en œuvre les idées convenues, mélangeant leurs
                compétences pour donner vie à la fresque, renforçant ainsi le
                sentiment d'appartenance à l'entreprise.
              </Typography>
            }
            icon={
              <PiAtomThin className="text-4xl hover:scale-105 transition duration-700 ease-in-out" />
            }
          ></ValuePropCompText>
          <ValuePropCompText
            className={"xl:border-r-0 m-0"}
            title={"Présentation et Célébration :"}
            text={
              <Typography variant={"p"}>
                {" "}
                Une fois terminée, la fresque est dévoilée lors d'une cérémonie
                spéciale où les membres de l'entreprise se rassemblent pour
                admirer le résultat final, renforçant les liens entre les
                collègues et créant un sentiment de fierté collective.
              </Typography>
            }
            icon={
              <HiOutlinePencil className=" text-4xl hover:scale-105 transition duration-700 ease-in-out" />
            }
          ></ValuePropCompText>
        </LayoutCardItem>
      </LayoutModule>
      <Banner
        source={
          "https://images.unsplash.com/photo-1522019929513-29058d1b3145?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        text={"Créez une fresque à votre image !"}
        textButton={"Devis sur mesure"}
      />
      <LayoutModule title={"F.A.Q"}>
        <LayoutCardItem>
          <Card>
            <CardContent>
              <Typography variant="h1">
                Vous voulez en savoir plus ?{" "}
              </Typography>{" "}
            </CardContent>
            <CardFooter className="flex items-center justify-center">
              <AlertCalendlyPage>
                <Button variant="fyliaButtonBlue">
                  Je souhaite prendre un rendez vous !
                </Button>
              </AlertCalendlyPage>
            </CardFooter>
          </Card>
          <AccordionForm
            question1={"Quel est le coût d’une prestation ?"}
            reponse1={
              "Le coût d'une prestation dépend de l'artiste choisi et du type de service. Il est calculé en fonction du temps nécessaire à la création de la prestation. Le prix ne dépassera jamais le budget convenu lors de nos entretiens."
            }
            question2={"Combien de temps pour faire une oeuvre ?"}
            reponse2={
              "Le temps de création dépend du nombre d'œuvres commandées et de leur format. Il peut également varier en fonction du degré de personnalisation de la commande."
            }
            question3={"Combien de temps pour une prestation ?"}
            reponse3={
              "Le temps de prestation dépend exclusivement de vos besoins. En cas d'événement, il peut varier d'une demi-journée à plusieurs jours. De plus, il peut également fluctuer en fonction des disponibilités de vos salariés en cas d'ateliers participatifs."
            }
            question4={"Comment sont sélectionnés vos artistes ?"}
            reponse4={
              "Nous sélectionnons nos artistes après les avoir rencontrés à plusieurs reprises personnellement. Nous proposons uniquement des artistes originaires de votre région, chacun spécialisé dans des types d'art bien distincts."
            }
            question5={"Quels sont exactement les avantages fiscaux ?"}
            reponse5={
              "Selon l'article 238bis AB du Code général des Impôts, une entreprise soumise à l'impôt sur les sociétés ou à l'impôt sur le revenu dans la catégorie des BIC, qui achète des œuvres originales d'artistes vivants pour les exposer au public, a le droit de déduire le prix d'acquisition de son résultat imposable. Cette déduction s'effectue à raison de 20% par an pendant 5 ans, dans la limite de 20 000 € ou 0,5% du chiffre d'affaires hors taxes."
            }
          />
        </LayoutCardItem>
      </LayoutModule>
    </>
  );
};

export default ServiceFresquePage;
