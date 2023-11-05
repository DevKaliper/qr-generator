import { ModeToggle } from "./toggle-theme";
import { Button } from "@/components/ui/button";

import { Logo } from "./Icons";
import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex  w-full items-center  justify-between   rounded-lg px-5 py-3 shadow-lg ">
      <div className="flex items-center justify-center gap-1">
        <Logo />
        <span className="text-2xl font-bold">QR Generator</span>
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          size="icon">
          <Link
            href="https://twitter.com/devkaliper"
            target="_blank">
            <Twitter className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="icon">
            <Link href="https://github.com/DevKaliper" target="_blank">
          <Github className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all  " />
            </Link>
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
