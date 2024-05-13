import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardFooter } from "@/src/components/ui/card";
import { Typography } from "@/src/components/ui/typography";
import { AccordionForm } from "@/src/features/components/accordion";
import { SimpleImage } from "@/src/features/components/simple-image";
import { StoryCompText } from "@/src/features/components/story-comp-text";
import { LayoutCardItem } from "@/src/features/layout/layout-card-item";
import { LayoutPage } from "@/src/features/layout/layout-page";
import Link from "next/link";
import { PiGearThin, PiHeartThin, PiPencilThin } from "react-icons/pi";

const EquipePage = () => {
  return (
    <div className="py-10">
      <LayoutPage title={"Notre équipe"}>
        <LayoutCardItem className={"border-t-0"}>
          <StoryCompText
            className="flex xl:items-start xl:text-start text-center items-center"
            title={"Luc"}
            paragraphe={
              "Alliant ses passions pour l’art et l’entrepreneuriat, Luc a toujours voulu être indépendant et créer son propre univers. Il est le visionnaire derrière l’idée de Fylia ❃"
            }
            title2={"Commercial"}
            icon={
              <PiPencilThin className="text-4xl hover:scale-105 transition duration-700 ease-in-out" />
            }
          />
          <SimpleImage
            image={"/image/pp-luc.png"}
            alt={""}
            size={"md:h-[350px] h-[190px]"}
          ></SimpleImage>
        </LayoutCardItem>
        <LayoutCardItem className={"border-t-0"}>
          <SimpleImage
            image={"/image/pp-dorian.png"}
            alt={""}
            size={"md:h-[350px] h-[190px]"}
          ></SimpleImage>
          <StoryCompText
            className=" flex xl:items-end xl:text-end text-center items-center"
            title={"Dorian"}
            paragraphe={
              "Ingénieur dans le bâtiment de formation, Dorian s'est très vite passioné pour le developpement web. Aujourd'hui il est la force technique derrière Fylia, assurant fiabilité et sérénité ❃"
            }
            title2={"Technique"}
            icon={
              <PiGearThin className="text-4xl hover:scale-105 transition duration-700 ease-in-out xl:ml-[100px]" />
            }
          />
        </LayoutCardItem>
        <LayoutCardItem className={"border-t-0 border-b-0"}>
          <StoryCompText
            className="flex xl:items-start xl:text-start text-center items-center"
            title={"Valentin"}
            paragraphe={
              "Inspiré par son amour pour le vivre ensemble, Valentin accorde une importance toute particulière à la notion de “bien être”, et “d'engagement”. Il veut oeuvrer pour la cause des artistes et celle des salariés ❃"
            }
            title2={"Marketing et communication"}
            icon={
              <PiHeartThin className="text-4xl hover:scale-105 transition duration-700 ease-in-out " />
            }
          />
          <SimpleImage
            image={"image/pp-valentin.png"}
            alt={""}
            className={"pb-0 mb-1"}
            size={"md:h-[350px] h-[190px]"}
          />
        </LayoutCardItem>{" "}
      </LayoutPage>
      <LayoutPage title={"Contactez nous"} className={"mt-10"}>
        <LayoutCardItem className={"border-t-0"}>
          <Card>
            <CardContent className="p-4">
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
      </LayoutPage>
    </div>
  );
};

export default EquipePage;
