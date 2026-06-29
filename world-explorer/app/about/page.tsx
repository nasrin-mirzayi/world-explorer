export default function About() {
    return (
        <div className="text-center grid grid-cols-1 gap-4 md:grid-cols-2 ">
            <div className="md:col-span-2 rounded-lg p-4">
                <p> This is a responsive country explorer project. Where user can search country by name and see each county details.<br></br>
                    i used <span className="text-yellow-400"><a href="https://api.restcountries.com/countries/v5?limit=25"> Rest country </a> </span>API to fetch country name, flag, region,capital,curriencies, population, language and time zone.<br></br>
                </p>
            </div>


            <section className="p-4 ">
                <div className=" my-3 p-3">
                    <h1 className="text-2xl text-yellow-400"> Home:</h1>
                    <p>first page that open and  user can see. <br></br>
                        hero banner and a button to explore countries.</p>
                </div>

                <div className="my-3"> <h3 className="text-2xl text-yellow-400">Countries:</h3>
                    <p>show fetched countries including their<br></br> name, flag, capital, population, region and language.</p></div>

                <div className="my-3"> <h3 className="text-2xl text-yellow-400"> Search: </h3>
                    <p> search country by name.</p></div>

                <div className="my-3"> <h3 className="text-2xl text-yellow-400"> About:</h3>
                    <p> summary of this project.</p></div>
            </section>

            <div className="m-10"> <h2 className="text-2xl text-yellow-400 p-4"> Considered topics:</h2>
                <ul className="space-y-4">
                     <li> Caching</li>
                    <li> App router</li>
                    <li> Dynamic routes</li>
                    <li> Server <span className="text-yellow-400"> + </span>Client component</li>
                    <li>Async <span className="text-yellow-400"> + </span> Await data fetching</li>
                    <li>Static <span className="text-yellow-400"> + </span> Dynamic rendering</li>
                   
                </ul></div>
        </div>
    )
}