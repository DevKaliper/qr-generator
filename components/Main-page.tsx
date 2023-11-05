import Header from "./header-page"
import SectionGenerate from "./section-generate"
import SectionQR from "./section-qr"


export default function MainPage() {
    return (
        <main className="h-screen w-screen px-3 py-2 flex-col gap-3 overflow-hidden">
        <header>
            <Header/>
        </header>

        <section className="flex flex-col lg:flex-row gap-2 justify-center items-center w-full h-[90%] mt-4 ">
           <SectionGenerate/>
              <SectionQR/>
        </section>

        <footer>
            <h3>footer</h3>
        </footer>
        </main>
    )
}