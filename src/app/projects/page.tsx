import Card from "@/app/components/Card";
import Image from "@/app/components/Image";

export default function Projects() {
  return (
    <div className="font-sans flex-col mx-auto justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 w-full h-full">
      <h1 className="text-2xl font-bold text-center mt-10 mb-4 sm:mt-4">
        Projects
      </h1>
      <p className="text-lg text-center">
        A few projects that I&apos;m allowed to show you.
      </p>
      <div className="md:flex mt-10 gap-x-8 space-y-8">
        <div className="md:w-1/2">
          <Card
            cardTitle="My Portfolio"
            cardInfo="Portfolio Website"
            linkText="Portfolio"
            link="https://github.com/danielspindler/portfolio"
          >
            This is the Portfolio itself. <br /> <br />
            I wanted something simple, clean and easy to navigate. <br />
            The Portfolio contains my Projects, Contact information and a little
            information about myself. <br /> <br />
            Used Technologies: NextJS, React, TailwindCSS, TypeScript, Node.js
            and prettier (So far), running on Nginx.
          </Card>
        </div>
        <div className="md:w-1/2">
          <Card
            cardTitle="ReactEmail Service"
            cardInfo="replacing MJML"
            linkText="ReactEmailService"
            link="https://github.com/DanielSpindler/ReactEmailService"
          >
            We had the problem that our old Email Template System (MJML) was
            outdated and hard to maintain. <br /> The new Solution should solve
            that part, while also having Sendgrid support. <br />
            <br />
            So I started looking for an alternative, which lead me to
            ReactEmail. <br /> <br />
            This solved the Problem with strange layouts and made it easier to
            interact with, specially for non-developers. <br /> <br />
            We gained a flexible and modern Template System with our own
            predefined components that can be used to create Emails.
            <br />
            <br /> This Service is used with Sendgrid, but is flexible enough to
            be used with other Mailers.
          </Card>
        </div>
      </div>
      <div className="mt-8 pb-12">
        <Card
          cardTitle="Leebmann24.com"
          cardInfo="Previous Job"
          linkText="Leebmann24"
          link="https://leebmann24.com"
        >
          I&apos;m afraid I can&apos;t share much about this project, but you
          can check out the website itself, it is Germanys biggest BMW Retail
          webshop, with alot of Features which i was involved in creating.
          Examples: VIN Decoder, Car Configurator, Spare Parts search and more.
          <Image
            className="my-4"
            src="/leebmann24.png"
            alt="Leebmann24"
            isZoomed
            width={240}
          />
          I was involved with most of the Frontend (Nextjs, TailwindCSS, Relay)
          and Backend (Node.js, NestJS) development, including microservices and
          APIs.
        </Card>
      </div>
    </div>
  );
}
