import { CoffeeIcon, Github, LinkIcon, Linkedin, MailIcon } from "lucide-react";
import { Card, CardHeader } from "./ui/card";
import Link from "next/link";

export default function Connect() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 mb-2 text-sm">
            <LinkIcon size={18} />
            <p className="font-semibold">Connect with me</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 *:text-muted-foreground *:flex *:items-center">
          <Link
            href="mailto:ibrahimdoba55@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailIcon size={18} className="mr-3" />
            ibrahimdoba55@gmail.com
          </Link>
          <Link href="https://github.com/IbrahimDoba">
            <Github size={18} className="mr-3" />
            IbrahimDoba
          </Link>
          <Link href="https://www.linkedin.com/in/ibrahimdoba/">
            <Linkedin size={18} className="mr-3" />
            Ibrahim Doba
          </Link>
          {/* <Link href="https://buymeacoffee.com/swajp">
            <CoffeeIcon size={18} className="mr-3" />
            Buy me a coffee
          </Link> */}
          <Link href="https://x.com/DobaIbrahim">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="size-[18px] mr-3"
            >
              <title>X</title>
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
            </svg>
            @DobaIbrahim
          </Link>
        </div>
      </CardHeader>
    </Card>
  );
}
