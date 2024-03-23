import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

interface AccordionFormProps {
  question1: string;
  reponse1: string;
  question2: string;
  reponse2: string;
  question3: string;
  reponse3: string;
  question4: string;
  reponse4: string;
  question5: string;
  reponse5: string;
}

export function AccordionForm({
  question1,
  question2,
  question3,
  question4,
  question5,
  reponse1,
  reponse2,
  reponse3,
  reponse4,
  reponse5,
}: AccordionFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Si vous vous posez des questions, les réponses seront surement ici ☞
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>{question1}</AccordionTrigger>
            <AccordionContent>{reponse1}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{question2}</AccordionTrigger>
            <AccordionContent>{reponse2}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>{question3}</AccordionTrigger>
            <AccordionContent>{reponse3}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>{question4}</AccordionTrigger>
            <AccordionContent>{reponse4}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>{question5}</AccordionTrigger>
            <AccordionContent>{reponse5}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
