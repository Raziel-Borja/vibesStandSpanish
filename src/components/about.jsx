export default () => {

    const jobs = [
        {
            title: "Mision",
            desc: "La misión del Proyecto Vibes es mejorar la vida de las personas que lidian con la atrofia muscular mediante la creación de soluciones de terapia asistida por tecnología. A través de prendas wearables que utilizan vibraciones, se ofrece terapia muscular dirigida para mejorar la fuerza, la movilidad y el bienestar general. El proyecto se impulsa mediante la innovación, la investigación y la colaboración, con el objetivo de capacitar a las personas para recuperar su independencia y una mayor calidad de vida.",
            date: "18/08/2023"
        },
        {
            title: "Vision",
            desc: "El Proyecto Vibes visualiza un futuro en el cual la tecnología se integra de manera fluida con la atención médica, ofreciendo soluciones efectivas y personalizadas a personas que combaten la atrofia muscular. Mediante una innovación continua y un enfoque centrado en el usuario, Vibes tiene como objetivo transformar el panorama de las intervenciones terapéuticas, fomentando la fuerza, la movilidad y el bienestar para todos.",
            date: "18/08/2023"
        },
        {
            title: "Objetivos",
            desc: "Los objetivos del Proyecto Vibes incluyen desarrollar soluciones de terapia de vanguardia basadas en vibraciones, integradas en prendas wearables, crear aplicaciones móviles y web fáciles de usar para mejorar las experiencias terapéuticas, realizar investigaciones exhaustivas para garantizar resultados efectivos, colaborar con profesionales médicos para validar la eficacia de la terapia y, en última instancia, empoderar a las personas con atrofia muscular para recuperar la fuerza, la movilidad y una mejor calidad de vida.",
            date: "18/08/2023"
        },
    ]

    return (
        <section className="mt-12 max-w-screen-lg mx-auto px-4 md:px-8">
            <div>
                <h1 className="text-gray-800 text-3xl font-semibold">
                    Acerca de VIBES company.
                </h1>
            </div>

            <ul className="mt-12 space-y-6">
                {
                    jobs.map((item, idx) => (
                        <li key={idx} className="p-5 bg-white rounded-md shadow-sm">
                            <a href={item.href}>
                                <div>
                                    <div className="justify-between sm:flex">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-medium text-violet-900">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-500 mt-2 pr-2">
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
                                            <span className="flex items-center text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                {item.date}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                                        
                                        
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}
