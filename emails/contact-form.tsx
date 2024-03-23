/* eslint-disable react/no-unescaped-entities */
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface ContactFormProps {
  email?: string;
  name?: string;
  tel?: string;
  message?: string;
  location?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ContactForm = ({
  email,
  name,
  tel,
  message,
  location,
}: ContactFormProps) => (
  <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            brand: "#007291",
          },
        },
      },
    }}
  >
    <Html>
      <Head />
      <Body className="bg-white font-sans">
        <Container className="mx-auto px-4 py-5 bg-cover bg-bottom">
          <Heading className="text-4xl font-bold mt-12  bg-blue-700 p-4 text-white border shadow-md">
            Nous avons reçu un message de {name}
          </Heading>
          <Section className="mt-6">
            <Text className="text-lg leading-8 font-light">
              Voici son email : {email}
            </Text>
            <Text className="text-lg leading-8 font-light">
              Voici son numéro de téléphone : {tel}
            </Text>
            <Text className="text-lg leading-8 font-light">
              Voici sa localisation : {location}
            </Text>
          </Section>
          <Text className="text-sm leading-8">
            Voici son message : {message}
          </Text>
          <Hr className="border-t border-gray-300 mt-12" />
          <Text className="text-sm text-gray-600 mt-2">Fylia company.</Text>
          <Text className="text-sm text-gray-600">
            527 chemin du coularet 13360 roquevaire
          </Text>
        </Container>
      </Body>
    </Html>{" "}
  </Tailwind>
);

export default ContactForm;
