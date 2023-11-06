"use client"

import { useState } from "react"
import Header from "./header-page"
import SectionGenerate from "./section-generate"
import SectionQR from "./section-qr"
import Footer from "./footer-page"




export default function MainPage() {
    const [value, setValue] = useState<string>("")
    const [link, setLink] = useState<string>("")
    

    return (
        <main className="h-screen w-screen px-3 py-2 flex-col gap-3 overflow-x-hidden lg:overflow-hidden">
        <header>
            <Header/>
        </header>

        <section className="flex flex-col lg:flex-row gap-2 justify-between items-center w-full h-[90%] mt-4 ">
           <SectionGenerate value={value} setValue={setValue} setLink={setLink}/>
              <SectionQR link={link} />
        </section>

        <footer className="h-auto w-full flex justify-center items-center">
            <Footer/>
        </footer>
        </main>
    )
}