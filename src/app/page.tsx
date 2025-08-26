import Card from "@/app/components/Card";
import Image from "./components/Image";

export default function Home() {
  return (
    <div className="font-sans flex-col mx-auto justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 w-full ">
      <h1 className="text-2xl font-bold text-center">
        Welcome to My Portfolio
      </h1>
      <div className="mx-auto flex rounded-full overflow-hidden w-60 h-60">
        <Image src="/kitsune.jpg" alt="Profile Picture" isZoomed width={240} />
      </div>
      <p className="text-lg text-center">
        Hi, I&apos;m a web developer with a passion for creating beautiful and
        functional websites.
      </p>
      <div className="md:flex mt-10 gap-x-8 space-y-8">
        <div className="md:w-1/2">
          <Card
            cardTitle="Daniel Spindler"
            cardInfo="Full Stack Developer"
            linkText="Github"
            link="https://github.com/danielspindler"
          >
            <div>
              <br /> My journey began in August 2020 as a trainee at Auto
              Leebmann GmbH, where I have continuously developed and refined my
              skills.
            </div>
            <br />
            To date, I have gained experience working with TypeScript in Next.js
            and NestJS, running on the Node.js runtime, contributing to a large
            international webshop project for Auto-Leebmann.
            <br /> <br /> With this Project I also gathered a wide range of
            experience in working with databases (MySQL, MongoDB), APIs
            (GraphQL, REST), and various tools and technologies such as Docker,
            Git, and TailwindCSS.
            <br />
            <br />
            You can see the used Skills in the Skillsection.
          </Card>
        </div>
        <div className="md:w-1/2">
          <Card
            cardTitle="Skills"
            cardInfo="Skillset"
            linkText="LinkedIn"
            link="https://www.linkedin.com/in/daniel-spindler-99000531a/"
          >
            <div>
              A list of Skills I possess:
              <ol className="list-disc list-inside mt-1">
                <li>HTML, CSS</li>
                <li>JavaScript, TypeScript</li>
                <li>NextJS, React</li>
                <li>Node.js, NestJS</li>
                <li>TailwindCSS</li>
                <br />
                <li>Docker</li>
                <li>GraphQL, Relay</li>
                <li>Postman</li>
                <li>MySQL, MongoDB</li>
                <br /> <li>Git, GitHub</li>
                <li>Scrum, Confluence, Jira</li>
              </ol>
            </div>
          </Card>
        </div>
      </div>
      <div className="w-full mt-8">
        <Card cardTitle="My Journey" cardInfo="Experience" linkText="" link="">
          <div>
            My Journey details
            <ol className="list-disc list-inside my-1">
              <li>
                Trainee as Softwaredeveloper/Full Stack 08.2020 - 06.2023 at
                Auto-Leebmann GmbH
              </li>
              <li>
                06.2023 - 07.2025: Full Stack Developer at Auto-Leebmann GmbH
              </li>
            </ol>{" "}
            Prior to that, I worked as a retailer in the mountain bike sector
            from 2013 to 2020.
          </div>
        </Card>
      </div>
    </div>
  );
}
