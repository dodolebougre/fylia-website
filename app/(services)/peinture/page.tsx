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

const ServiceOeuvrePage = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-100 from-0% via-white via-50% to-emerald-100 to-95% pb-10">
      <Hero
        backgroundImageHref={"/image/hero-oeuvre.png"}
        titreHero={"Des peintures à l'image de "}
        sousTitreHero={
          " L’art de nos artistes locaux pour embellir vos espaces de travail"
        }
        buttonHero={"Devis sur mesure ☞"}
        hrefButtonHero={"/devis"}
        typeWriter1={"vos valeurs"}
        typeWriter2={"vos envies"}
        typeWriter3={"vos locaux"}
      />
      <LayoutModule title="Avantages" className="">
        <LayoutCardItem>
          <DescribeCompText
            className="flex xl:items-start xl:text-start text-center items-center"
            title={"Pourquoi une peinture sur-mesure ?"}
            title2={"A vos marques !"}
            list1={"Exposer le style d’un artiste local ❤️‍🔥"}
            list2={"Embellir les espaces de travail "}
            list3={"Apporter de la créativité au bureau ⌇"}
            buttonText={"Découvrez nos artistes ☞"}
            buttonHref={"/artistes?tag=Peinture"}
          />
          <SimpleImage
            image={
              "https://images.unsplash.com/photo-1626555019243-638888e7dc3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            title={" Vos équipes vont adorer"}
            title2={"Pret ?"}
            list1={"Retrouver leur créativité autour d'une oeuvre commune 🔑"}
            list2={"S'identifier à l'entreprise et se sentir pris en compte 🎁"}
            list3={"Découvrir un artiste, son style et son histoire 👨🏻‍🎨"}
            buttonText={"Découvrez les avantages ☞"}
            buttonHref={"/blogs?tag=Art"}
          />
        </LayoutCardItem>
        <LayoutCardItem className={"border-t-0"}>
          <DescribeCompText
            className="flex xl:items-start xl:text-start text-center items-center"
            title={" Les avantages pour l'entreprises !"}
            title2={"Peignez ☞"}
            list1={"Bénéficier d’un dispositif fiscal avantageux 💸"}
            list2={"Embellir vos lieux de travail 🤩"}
            list3={"Rendre votre groupe plus productif et engagé 🤝"}
            buttonText={"Devis gratuit et rapide ☞"}
            buttonHref={"/devis"}
          />
          <SimpleImage
            image={"/image/hero-oeuvre.png"}
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
            title={"Rencontre avec l'artiste"}
            text={
              <Typography variant={"p"}>
                Vous échangerez sur son histoire et son style,{" "}
                <strong>sa méthode de travail et ses inspirations. ✷</strong>
              </Typography>
            }
          ></ValuePropCompText>
          <ValuePropCompText
            className="xl:border-r xl:border-b-0 border-b"
            title={"Co-création de l'oeuvre"}
            text={
              <Typography variant={"p"}>
                {" "}
                vous participez à la création d’une oeuvre qui{" "}
                <strong>représentera votre entreprise et ses valeurs ✷</strong>
              </Typography>
            }
            icon={
              <PiAtomThin className="text-4xl hover:scale-105 transition duration-700 ease-in-out" />
            }
          ></ValuePropCompText>
          <ValuePropCompText
            className={"xl:border-r-0 m-0"}
            title={"Créativité des équipes"}
            text={
              <Typography variant={"p"}>
                {" "}
                Chacun des employés challengera sa créativité{" "}
                <strong>
                  permettant ainsi a l'artiste de créer l'oeuvre par la suite !
                </strong>{" "}
                ✶
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
            buttonHref={"/artistes?tag=Peinture"}
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

export default ServiceOeuvrePage;
