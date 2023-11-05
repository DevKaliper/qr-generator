"use client"

import { useState } from "react"
import Header from "./header-page"
import SectionGenerate from "./section-generate"
import SectionQR from "./section-qr"




export default function MainPage() {
    const [link, setLink] = useState<string>("")

    return (
        <main className="h-screen w-screen px-3 py-2 flex-col gap-3 overflow-hidden">
        <header>
            <Header/>
        </header>

        <section className="flex flex-col lg:flex-row gap-2 justify-center items-center w-full h-[90%] mt-4 ">
           <SectionGenerate link={link} setLink={setLink}/>
              <SectionQR link={link} />
        </section>

        <footer>
            <h3>footer</h3>
        </footer>
        </main>
    )
}