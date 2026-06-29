import Link from "next/link";

export default async function CountriesPage() {
  const response = await fetch(
    "https://api.restcountries.com/countries/v5?limit=25",
    {
      cache: "force-cache",
      headers: {
        Authorization:
          "Bearer rc_live_efdee4290ecb4cab8f9dc13c4f569407",
      },
    }
  );

  const result = await response.json();
  const countries = result.data.objects;

  return (
    <>
      <h1 className="text-center text-4xl text-yellow-600">Countries</h1>

      <div className="container text-yellow-600 mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {countries.map((country: any) => {
          if (!country.flag?.url_png) return null;

          return (
            <div
              key={country.id}
              className="w-80 rounded-xl border-2 border-amber-400 p-6 shadow-xl"
            >
              <h2 className="mb-4 text-2xl font-bold text-center">
                {country.names?.common}
              </h2>

              <img
                src={country.flag.url_png}
                alt={country.names.common}
                width={400}
                height={300}
                className="h-48 w-full rounded-lg object-cover"
              />

              <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                <p>Capital: {country.capitals?.[0]?.name ?? "No capital"}</p>
                <p>Region: {country.region}</p>
                <p>
                  Languages:{" "}
                  {country.languages
                    ?.map((lang: any) => lang.name)
                    .join(", ")}
                </p>
                <p>
                  Population: {country.population.toLocaleString()}
                </p>
              </div>



              <div className="mt-6 flex justify-center">
  <Link href={`/countries/${country.codes.alpha_3}`}>
    <button className="rounded bg-yellow-600 px-4 py-2 text-white hover:bg-blue-700">
      View Details
    </button>
  </Link>
</div>



            </div>
          );
        })}
      </div>
    </>
  );
}