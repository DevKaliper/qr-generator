
import { ModeToggle } from "./toggle-theme"; 

import {Logo} from "./Icons";


export default function Header() {

  return (
    <div className="w-full  px-5 py-3  shadow-lg   rounded-lg flex justify-between items-center ">
        <div className="flex gap-1 justify-center items-center">
          <Logo />
      <span className="text-2xl font-bold">QR Generator</span>
        </div>

      <div className="flex gap-4">
        <span>Github</span>
        <span>X</span>
        <ModeToggle />
      </div>
    </div>
  );
}
