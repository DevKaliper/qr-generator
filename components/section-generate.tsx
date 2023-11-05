import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { QrCode, Trash2 } from "lucide-react";

import { Dispatch, SetStateAction } from "react";

interface GenerateProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  setLink: Dispatch<SetStateAction<string>>;
}

const Generate: React.FC<GenerateProps> = ({ value, setValue, setLink }) => {
  const handleLink = (e: any) => {
    setValue(e.target.value); // send the value to the parent component
  };
  const handleSendLink = () => {
    setLink(value); // send the value to the parent component
  };

  const handleResetValue = () => {
    setValue("");
    setLink("");
  }
  return (
    <article className="flex h-full w-full flex-col items-center justify-center rounded-lg  border-gray-950 shadow-lg   dark:border-x-zinc-600 lg:w-3/5">
      <h2 className="my-3 font-semibold lg:text-2xl">
        Ready to create your own QR code?
      </h2>
      <div className="w-1/2">
        <Input
          className="flex-shrink-0"
          placeholder="Enter your value here..."
          value={value}
          onChange={(e) => handleLink(e)}
        />
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button
          className="mt-4 flex items-center justify-center gap-2 font-bold lg:text-xl"
          onClick={handleSendLink}>
          Generate <QrCode />
        </Button>
        <Button
          className="mt-4 flex items-center justify-center  font-bold lg:text-xl"
          onClick={handleResetValue}>
          
          <Trash2 />
        </Button>
      </div>
    </article>
  );
};

export default Generate;
