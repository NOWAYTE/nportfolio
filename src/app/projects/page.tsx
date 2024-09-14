import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Nowayte",
  description: "Daniel is a developer.",
};

export default function Projects() {
  return (
    <Container>
      <div className="sm:pl-20 md:pl-0">
        <span className="text-4xl pr-3 ">🧪</span>
        <h1 className="font-black text-lg md:text-3xl lg:text-4xl mt-6 mb-4">
          My work
        </h1>
      </div>

      <Products />
    </Container>
  );
}
