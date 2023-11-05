import { ModeToggle } from "./toggle-theme"; 


export default function Header() {
  return (
    <div className="w-full  px-5 py-3 border shadow-lg border-gray-950 dark:border-gray-300 rounded-lg flex justify-between items-center ">
        <div>

      <span>logo</span>
      <span>QR Generator</span>
        </div>

      <div className="flex gap-4">
        <span>Github</span>
        <span>X</span>
        <ModeToggle />
      </div>
    </div>
  );
}
