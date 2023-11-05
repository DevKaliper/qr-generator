import Header from "./header-page"


export default function MainPage() {
    return (
        <main className="h-screen w-screen px-3 py-2 flex-col gap-3">
        <header>
            <Header/>
        </header>

        <section>
            <h2>main</h2>
        </section>

        <footer>
            <h3>footer</h3>
        </footer>
        </main>
    )
}