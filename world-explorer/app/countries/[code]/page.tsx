
import Link from "next/link";

type Props = {
  params: Promise<{
    code: string;
  }>;
};

export default async function CountryDetails({ params }: Props) {
  const { code } = await params;

  const response = await fetch(
    `https://api.restcountries.com/countries/v5/codes.alpha_3/${code}`,
    {
      cache: "force-cache",
      headers: {
        Authorization:
          "Bearer rc_live_efdee4290ecb4cab8f9dc13c4f569407",
      },
    }
  );

  const result = await response.json();
  const country = result.data.objects[0];

  return (
    <div className="container mx-auto max-w-6xl px-6 py-10">

    
      <Link
        href="/countries"
        className="mb-8 inline-block rounded-lg bg-amber-500 px-5 py-3 font-semibold text-white shadow transition hover:bg-amber-600"
      >
        ← Back to Countries
      </Link>

    
      <div className="rounded-2xl border-4 border-amber-400 p-8 shadow-2xl">

    
        <h1 className="mb-8 text-center text-5xl font-bold text-amber-500">
          {country.names.common}
        </h1>

  
        <img
          src={country.flag.url_png}
          alt={country.names.common}
          className="mx-auto mb-10 h-72 rounded-xl border-4 border-amber-300 object-cover shadow-lg"
        />

      
        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-xl border-2 border-amber-300 p-5 shadow">
            <h2 className="mb-3 text-xl font-bold text-amber-500">
              Official Name
            </h2>
            <p>{country.names.official}</p>
          </div>

          <div className="rounded-xl border-2 border-amber-300 p-5 shadow">
            <h2 className="mb-3 text-xl font-bold text-amber-500">
              Capital
            </h2>
            <p>{country.capitals?.[0]?.name ?? "No Capital"}</p>
          </div>

          <div className="rounded-xl border-2 border-amber-300 p-5 shadow">
            <h2 className="mb-3 text-xl font-bold text-amber-500">
              Region
            </h2>
            <p>{country.region}</p>
          </div>

          <div className="rounded-xl border-2 border-amber-300 p-5 shadow">
            <h2 className="mb-3 text-xl font-bold text-amber-500">
              Sub Region
            </h2>
            <p>{country.subregion}</p>
          </div>

          <div className="rounded-xl border-2 border-amber-300 p-5 shadow">
            <h2 className="mb-3 text-xl font-bold text-amber-500">
              Population
            </h2>
            <p>{country.population.toLocaleString()}</p>
          </div>

          <div className="rounded-xl border-2 border-amber-300 p-5 shadow">
            <h2 className="mb-3 text-xl font-bold text-amber-500">
              Languages
            </h2>
            <p>
              {country.languages
                ?.map((lang: any) => lang.name)
                .join(", ")}
            </p>
          </div>

          <div className="rounded-xl border-2 border-amber-300 p-5 shadow">
            <h2 className="mb-3 text-xl font-bold text-amber-500">
              Currency
            </h2>
            <p>
              {country.currencies
                ?.map(
                  (currency: any) =>
                    `${currency.name} (${currency.symbol})`
                )
                .join(", ")}
            </p>
          </div>

          <div className="rounded-xl border-2 border-amber-300 p-5 shadow">
            <h2 className="mb-3 text-xl font-bold text-amber-500">
              Time Zones
            </h2>
            <p>{country.timezones?.join(", ")}</p>
          </div>

          <div className="rounded-xl border-2 border-amber-300 p-5 shadow">
            <h2 className="mb-3 text-xl font-bold text-amber-500">
              Continents
            </h2>
            <p>{country.continents?.join(", ")}</p>
          </div>

          <div className="rounded-xl border-2 border-amber-300 p-5 shadow">
            <h2 className="mb-3 text-xl font-bold text-amber-500">
              Start of Week
            </h2>
            <p>{country.start_of_week}</p>
          </div>

          <div className="rounded-xl border-2 border-amber-300 p-5 shadow">
            <h2 className="mb-3 text-xl font-bold text-amber-500">
              Driving Side
            </h2>
            <p>{country.car?.side}</p>
          </div>

          <div className="rounded-xl border-2 border-amber-300 p-5 shadow">
            <h2 className="mb-3 text-xl font-bold text-amber-500">
              Google Maps
            </h2>

            <a
              href={country.maps?.google_maps}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 underline hover:text-blue-800"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        {country.coat_of_arms?.url_png && (
          <div className="mt-12 rounded-xl border-2 border-amber-300 p-6 shadow">
            <h2 className="mb-6 text-center text-3xl font-bold text-amber-500">
              Coat of Arms
            </h2>

            <img
              src={country.coat_of_arms.url_png}
              alt="Coat of Arms"
              className="mx-auto h-56"
            />
          </div>
        )}

  
        {country.borders?.length > 0 && (
          <div className="mt-12 rounded-xl border-2 border-amber-300 p-6 shadow">
            <h2 className="mb-6 text-center text-3xl font-bold text-amber-500">
              Border Countries
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {country.borders.map((border: string) => (
                <Link
                  key={border}
                  href={`/countries/${border}`}
                  className="rounded-full bg-amber-400 px-5 py-2 font-semibold text-white transition hover:bg-amber-500"
                >
                  {border}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

