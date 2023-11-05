import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { QrCode } from "lucide-react"

export default function SectionGenerate() {
    return(
        <article className="h-full w-full lg:w-3/5 flex flex-col justify-center items-center  shadow-lg dark:border-x-zinc-600   border-gray-950 rounded-lg">
            <h2 className="font-semibold lg:text-2xl my-3">
                Ready to create your own QR code?
            </h2>
            <div className="w-1/2">
                <Input className="flex-shrink-0" placeholder="Enter your link here..."/>
            </div>
            <Button className="mt-4 font-bold lg:text-xl flex gap-2 justify-center items-center">Generate <QrCode /></Button>

            


        </article>
    )
}