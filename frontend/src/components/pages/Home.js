import background from "../../img/airplane-background.png"

function Home() {
    return (
        <section
            className="relative h-screen w-full bg-cover bg-right"
            style={{ backgroundImage: `url(${background})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40 lg:from-black/70 lg:to-transparent"></div>
            <div className="relative h-full flex items-center pl-10 md:pl-20 lg:pl-32 lg:justify-start justify-center">
                <div className="text-center lg:text-left text-white max-w-2xl px-4 lg:pl-0">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">Pronto para decolar?</h1>
                    <p className="mt-4 text-lg md:text-xl lg:text-2xl">
                        A CostPilot guia sua empresa para uma gestão inteligente, te ajudando a pilotar seus custos com eficiência rumo ao céu!
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Home