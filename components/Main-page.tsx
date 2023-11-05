import Header from "./header-page"


export default function MainPage() {
    return (
        <main className="h-screen w-screen px-3 py-2 flex-col gap-3">
        <header>
            <Header/>
        </header>

        <section className="flex flex-col lg:flex-row gap-2 justify-center items-center w-full h-[90%] mt-4 ">
            <h2 className="h-full w-full lg:w-3/5  bg-gray-300">generate</h2>
            <h2 className="h-full w-full lg:w-2/5 bg-gray-300">Code</h2>
        </section>

        <footer>
            <h3>footer</h3>
        </footer>
        </main>
    )
}