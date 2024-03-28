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

const ServiceFresquePage = () => {
  return (
    <div className="pb-10 bg-gradient-to-r from-orange-100 via-white to-orange-100">
      <Hero
        backgroundImageHref={"/image/hero-fresque.png"}
        titreHero={"Une fresque à l'image de "}
        sousTitreHero={
          " Nos artistes peignent à même les murs de vos locaux, pour un résultat sensationel !"
        }
        buttonHero={"Devis sur mesure ☞"}
        hrefButtonHero={"/devis"}
        typeWriter1={"vos valeurs"}
        typeWriter2={"votre équipe"}
        typeWriter3={"vos locaux"}
      />
      <LayoutModule title="Avantages" className="">
        <LayoutCardItem>
          <DescribeCompText
            className="flex xl:items-start xl:text-start text-center items-center"
            title={"Pourquoi une fresque sur-mesure ?"}
            title2={"A vos marques !"}
            list1={"Embellir tout un espace de vie ❤️‍🔥"}
            list2={"Rendre votre bâtiment unique ✩"}
            list3={"Renforcer les liens de vos équipes 🎨"}
            buttonText={"Découvrez nos artistes ☞"}
            buttonHref={"/artistes?tag=Fresque"}
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
            list1={"S’unir autour d’un projet créatif commun 🧩"}
            list2={"S'identifier à leur entreprise 🎁"}
            list3={"Découvrir un artiste, son style et son histoire 👨🏻‍🎨"}
            buttonText={"Découvrez les avantages ☞"}
            buttonHref={"/blogs?tag=Art"}
          />
        </LayoutCardItem>
        <LayoutCardItem className={"border-t-0"}>
          <DescribeCompText
            className="flex xl:items-start xl:text-start text-center items-center"
            title={"  Les avantages pour l'entreprises ! "}
            title2={"Peignez ☞"}
            list1={" Fédérer vos équipes d’une manière novatrice ⚔️"}
            list2={" Vous différencier de la concurrence 🤩"}
            list3={"Rendre votre groupe plus productif et engagé 🤝"}
            buttonText={"Devis gratuit et rapide ☞"}
            buttonHref={"/devis"}
          />
          <SimpleImage
            image={"/image/hero-fresque.png"}
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
            title={" Planification et conception "}
            text={
              <Typography variant={"p"}>
                Les employés se réunissent pour partager leurs idées et
                esquissent des concepts initiaux,{" "}
                <strong>
                  favorisant ainsi la collaboration et l'engagement de toute
                  l'équipe dans le processus créatif,
                </strong>{" "}
                créant un moment de partage inoubliable.
              </Typography>
            }
          ></ValuePropCompText>
          <ValuePropCompText
            className="xl:border-r xl:border-b-0 border-b"
            title={"Réalisation Artistique "}
            text={
              <Typography variant={"p"}>
                {" "}
                Sous la direction d'un artiste professionnel ou en équipe, les
                employés mettent en œuvre les idées convenues,{" "}
                <strong>
                  mélangeant leurs compétences pour donner vie à la fresque,
                </strong>{" "}
                renforçant ainsi le sentiment d'appartenance à l'entreprise.
              </Typography>
            }
            icon={
              <PiAtomThin className="text-4xl hover:scale-105 transition duration-700 ease-in-out" />
            }
          ></ValuePropCompText>
          <ValuePropCompText
            className={"xl:border-r-0 m-0"}
            title={"Présentation et célébration "}
            text={
              <Typography variant={"p"}>
                {" "}
                Une fois terminée, la fresque est dévoilée lors d'une cérémonie
                spéciale où les membres de l'entreprise se{" "}
                <strong>
                  rassemblent pour admirer le résultat final, renforçant les
                  liens entre les collègues et créant un sentiment de fierté
                  collective.
                </strong>
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
            buttonHref={"/artistes?tag=Fresque"}
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
            <CardFooter className="flex items-center justify-center">
              <Link href="/rendez-vous">
                <Button variant="fyliaButtonBlue">
                  Je souhaite prendre un rendez vous !
                </Button>
              </Link>
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
    </div>
  );
};

export default ServiceFresquePage;
