

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { QrCode } from "lucide-react"

import { Dispatch, SetStateAction } from "react";

interface GenerateProps {
    link: string;
    setLink: Dispatch<SetStateAction<string>>;
}

const Generate: React.FC<GenerateProps> = ({ link, setLink }) => {
    const handleLink = (e: any) => {
        setLink(e.target.value)
        

    }
    
    return (
        <article className="h-full w-full lg:w-3/5 flex flex-col justify-center items-center  shadow-lg dark:border-x-zinc-600   border-gray-950 rounded-lg">
            <h2 className="font-semibold lg:text-2xl my-3">
                Ready to create your own QR code?
            </h2>
            <div className="w-1/2">
                <Input
                    className="flex-shrink-0"
                    placeholder="Enter your link here..."
                    value={link}
                    onChange={(e) => handleLink(e) }
                />
            </div>
            <Button className="mt-4 font-bold lg:text-xl flex gap-2 justify-center items-center">
                Generate <QrCode />
            </Button>
        </article>
    );
};


export default Generate;