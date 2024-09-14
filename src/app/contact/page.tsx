import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { SocialLinks } from "@/components/SocialLinks";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Contact | Nowayte",
  description:
    "Daniel is a developer.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">☎️</span>
      <h1 className="font-black mb-2 text-xl pt-2">Get in Touch</h1>
      <div className="pb-7">
        <SocialLinks />
      </div>
      <Contact />
    </Container>
  );
}
