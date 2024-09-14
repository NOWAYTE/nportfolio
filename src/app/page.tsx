import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <h1 className="font-bold text-2xl dark:text-[#e7e5d5]">
        Hello friend<span className="text-2xl">👋</span>
      </h1>
      <div className="relative inline-block pt-6">
        <Image
          className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-solid border-[#FEF9D9] shadow-lg object-cover"
          src="/images/arcane.png"
          alt="profile pic"
          width={256}
          height={256}
        />
      </div>

      <h1 className="font-black dark:text-[#bbb9a8]">I&apos;m Nowayte</h1>
      <Paragraph className="max-w-xl mt-4 dark:text-[#7a8377]">
        Hi there! I&apos;m a full-stack developer who loves{" "}
        <Highlight>building cool stuff</Highlight>—from apps that solve real
        problems to websites that don&apos;t break.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4 dark:text-[#7a8377]">
        I’m passionate about <Highlight>coding</Highlight> and{" "}
        <Highlight>technology</Highlight>, and can’t seem to keep that mug of coffee
        away—..sshh!! my secret weapon for solving problems and building innovative
        solutions.
      </Paragraph>

      <h1 className="font-black text-lg md:text-3xl lg:text-4xl mt-20 mb-4 dark:text-[#e7e5d5] sm:pl-20 md:pl-0">
        <span className="text-4xl pr-3">🧪</span>
        My work
      </h1>
      <Products />
      <TechStack />
    </Container>
  );
}
