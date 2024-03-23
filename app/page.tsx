/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@/src/components/ui/typography";
import { CompareSlider } from "@/src/features/components/compare-slider";

import { DescribeCompText } from "@/src/features/components/describe-comp-text";
import { SimpleImage } from "@/src/features/components/simple-image";
import { ValuePropCompText } from "@/src/features/components/value-prop-comp-text";
import { LayoutCardItem } from "@/src/features/layout/layout-card-item";
import LayoutModule from "@/src/features/layout/layout-module";

import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/src/components/ui/card";
import { CarouselItem } from "@/src/components/ui/carousel";
import { AccordionForm } from "@/src/features/components/accordion";
import { Banner } from "@/src/features/components/banner";
import { AlertCalendlyPage } from "@/src/features/components/calendly";
import { CarouselCard } from "@/src/features/components/carousel";
import { ContactForm } from "@/src/features/components/contact-form";
import { Home } from "@/src/features/components/home";
import Image from "next/image";
import { CiPen } from "react-icons/ci";
import { PiClockCountdownLight, PiLeafLight } from "react-icons/pi";
import { Button } from "../src/components/ui/button";

export default function HomePage() {
  return (
    <>
      <Home
        titreHero="L'art personnalisé, au service du bien être"
        sousTitreHero="Nos artistes vous aident à améliorer vos locaux grâce à des prestations uniques."
        buttonHero="Voir nos artistes ☞"
        buttonHero2="Je suis un artiste ☞"
        hrefButtonHero="artiste"
        hrefSwapLink="forces"
      />
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
      <LayoutModule id="forces" title="Nos forces" className="xl:flex-row">
        <LayoutCardItem>
          <ValuePropCompText
            className="xl:border-r xl:border-b-0 border-b"
            icon={
              <CiPen className=" text-4xl hover:scale-105 transition duration-700 ease-in-out" />
            }
            title={"L’image de marque"}
            text={
              <Typography variant={"p"}>
                Réalisez un investissement <strong>engagé</strong>, qui exprime
                les <strong>valeurs de votre entreprise</strong>, vous
                différencie de la concurrence tout en{" "}
                <strong>soutenant l’art</strong> et les artistes{" "}
                <strong>locaux</strong> ✶
              </Typography>
            }
          ></ValuePropCompText>
          <ValuePropCompText
            className="xl:border-r xl:border-b-0 border-b"
            title={"Bien être"}
            text={
              <Typography variant={"p"}>
                <strong>Stimulez</strong> la créativité et le
                <strong> bien être </strong> de vos équipes grâce à l'art. Créez
                un environnement de travail{" "}
                <strong> reflétant leurs valeurs</strong> et favorisant ainsi
                l’engagement ✶
              </Typography>
            }
            icon={
              <PiLeafLight className="text-4xl hover:scale-105 transition duration-700 ease-in-out" />
            }
          ></ValuePropCompText>
          <ValuePropCompText
            className={"xl:border-r-0 m-0"}
            title={"Avantages financiers"}
            text={
              <Typography variant={"p"}>
                {" "}
                En achetant une ou plusieurs œuvres d’arts et en{" "}
                <strong>soutenant nos artistes</strong> , votre entreprise est
                éligible à une <strong>déduction d’impôts sur 5 ans </strong> ✶
              </Typography>
            }
            icon={
              <PiClockCountdownLight className=" text-4xl hover:scale-105 transition duration-700 ease-in-out" />
            }
          ></ValuePropCompText>
        </LayoutCardItem>
      </LayoutModule>

      <LayoutModule id="services" title="Nos services" className="">
        <LayoutCardItem>
          <DescribeCompText
            className="flex xl:items-start xl:text-start text-center items-center"
            title={"Tableaux personnalisés"}
            title2={" Une offre adaptée à vos besoins !"}
            list1={"Représentez votre identité ✓"}
            list2={"Créez votre propre galerie ✓"}
            list3={"Marquez les esprits ✓"}
            buttonText={"En savoir plus ☞"}
            buttonHref={"/oeuvre"}
          />
          <SimpleImage
            image={
              "https://images.unsplash.com/photo-1566131929856-21b5077cd4fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={""}
            size={"md:h-[350px] h-[190px]"}
          ></SimpleImage>
        </LayoutCardItem>
        <LayoutCardItem className={"border-t-0"}>
          <CompareSlider
            altImage1={""}
            srciImage1={"/image/fresque-entreprise.png"}
            altImage2={""}
            srciImage2={"/image/sans-fresque-entreprise.png"}
          />
          <DescribeCompText
            className=" flex xl:items-end xl:text-end text-center items-center"
            title={"Des fresques sur-mesure"}
            title2={"Une prestation entièrement personnalisable"}
            list1={"Transformez vos espaces de travail ✓"}
            list2={"Partagez votre histoire et vos valeurs ✓"}
            list3={"Embelissez vos espaces de travail ✓"}
            buttonText={"En savoir plus ☞"}
            buttonHref={""}
          />
        </LayoutCardItem>
        <LayoutCardItem className={"border-t-0"}>
          <DescribeCompText
            className="flex xl:items-start xl:text-start text-center items-center"
            title={"Un séminaire organisé de A à Z"}
            title2={" Faites participer vos employés !"}
            list1={"Fédérez vos employés autour de nos services artistiques ✓"}
            list2={"Proposez un moyen de partage novateur et engagé ✓"}
            list3={"Faites décourvrir l'importance de l'art ✓"}
            buttonText={"En savoir plus ☞"}
            buttonHref={""}
          />
          <SimpleImage
            image={
              "https://images.unsplash.com/photo-1646066490248-27b984261e3c?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={""}
            className={"pb-0 mb-0"}
            size={"md:h-[350px] h-[190px]"}
          />
        </LayoutCardItem>
      </LayoutModule>
      <Banner
        source={
          "https://images.unsplash.com/photo-1522019929513-29058d1b3145?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        text={"Vous voulez décorer vos locaux grace à l'art?"}
        textButton={"Devis sur mesure"}
      />
      <LayoutModule title={"Comment ça marche ?"}>
        <LayoutCardItem>
          <CarouselCard>
            <CarouselItem key={""} className="xl:basis-1/3 md:basis-1/2 ">
              <div className="p-1">
                <Card
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1626555019243-638888e7dc3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxwZWludHJlfGVufDB8fDB8fHww)`,
                    // center the image
                    backgroundPosition: "center",
                    // set the image to cover all the space
                    backgroundSize: "cover",
                  }}
                  variant={"default"}
                  className="border text-card-foreground "
                >
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-white bg-black/20 backdrop-blur m-4">
                    <CardTitle>Etape 1</CardTitle>
                    <Typography variant={"p"}>
                      Trouvez un artiste qui vous convient ou{" "}
                      <strong>
                        {" "}
                        remplissez le formulaire (devis sur mesure){" "}
                      </strong>
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem key={""} className="xl:basis-1/3 md:basis-1/2 ">
              <div className="p-1">
                <Card
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbnRhY3RlcnxlbnwwfHwwfHx8MA%3D%3D)`,
                    // center the image
                    backgroundPosition: "center",
                    // set the image to cover all the space
                    backgroundSize: "cover",
                  }}
                  variant={"default"}
                  className="border text-card-foreground "
                >
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-white bg-black/20 backdrop-blur m-4">
                    <CardTitle>Etape 2</CardTitle>
                    <Typography variant={"p"}>
                      Nous vous contactons pour vous présenter tout les
                      <strong>
                        {" "}
                        aspects et vous proposez des prestations
                      </strong>{" "}
                      parfaitement adaptées à votre entreprise.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem key={""} className="xl:basis-1/3 md:basis-1/2 ">
              <div className="p-1">
                <Card
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJ2YWlsJTIwJUMzJUE5cXVpcGV8ZW58MHx8MHx8fDA%3D)`,
                    // center the image
                    backgroundPosition: "center",
                    // set the image to cover all the space
                    backgroundSize: "cover",
                  }}
                  variant={"default"}
                  className="border text-card-foreground "
                >
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-white bg-black/20 backdrop-blur m-4">
                    <CardTitle>Etape 3</CardTitle>
                    <Typography variant={"p"}>
                      En collaboration avec vous,{" "}
                      <strong>nous perfectionnons</strong> ces propositions pour{" "}
                      <strong>créer un événement ou une prestation</strong> qui
                      correspond pleinement à vos attentes.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem key={""} className="xl:basis-1/3 md:basis-1/2 ">
              <div className="p-1">
                <Card
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1531123414780-f74242c2b052?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBoYXBweXxlbnwwfHwwfHx8MA%3D%3D)`,
                    // center the image
                    backgroundPosition: "center",
                    // set the image to cover all the space
                    backgroundSize: "cover",
                  }}
                  variant={"default"}
                  className="border text-card-foreground "
                >
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-white bg-black/20 backdrop-blur m-4">
                    <CardTitle>Etape 4</CardTitle>
                    <Typography variant={"p"}>
                      Nous fixons une date et le tour est joué.{" "}
                      <strong>Place à l’artiste!</strong>
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselCard>
        </LayoutCardItem>
      </LayoutModule>
      <LayoutModule id="artiste" title={"Nous recrutons"}>
        <LayoutCardItem>
          <ContactForm />
          <SimpleImage
            image={
              "https://images.unsplash.com/photo-1611244419377-b0a760c19719?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={""}
            className={"pb-0 mb-0"}
            size={"md:h-[750px] h-[400px]"}
          />
        </LayoutCardItem>
      </LayoutModule>
      <LayoutModule title={"F.A.Q"}>
        <LayoutCardItem>
          <Card>
            <CardContent className="p-4">
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
}
