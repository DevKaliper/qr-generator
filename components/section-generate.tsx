

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { QrCode } from "lucide-react"

import { Dispatch, SetStateAction } from "react";

interface GenerateProps {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    setLink: Dispatch<SetStateAction<string>>;
}

const Generate: React.FC<GenerateProps> = ({ value, setValue, setLink }) => {
    const handleLink = (e: any) => {
        setValue(e.target.value) // send the value to the parent component
        

    }
    const handleSendLink = () => {
        setLink(value) // send the value to the parent component
        
    }

    
    return (
        <article className="h-full w-full lg:w-3/5 flex flex-col justify-center items-center  shadow-lg dark:border-x-zinc-600   border-gray-950 rounded-lg">
            <h2 className="font-semibold lg:text-2xl my-3">
                Ready to create your own QR code?
            </h2>
            <div className="w-1/2">
                <Input
                    className="flex-shrink-0"
                    placeholder="Enter your value here..."
                    value={value}
                    onChange={(e) => handleLink(e) }
                />
            </div>
            <Button className="mt-4 font-bold lg:text-xl flex gap-2 justify-center items-center" onClick={handleSendLink}>
                Generate <QrCode />
            </Button>
        </article>
    );
};


export default Generate;