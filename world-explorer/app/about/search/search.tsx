
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Country = {
  id: string;
  names: {
    common: string;
  };
  flag: {
    url_png: string;
  };
  capitals?: {
    name: string;
  }[];
  region: string;
  population: number;
  languages?: {
    name: string;
  }[];
  codes: {
    alpha_3: string;
  };
};

export default function CountriesPage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(
        "https://api.restcountries.com/countries/v5?limit=25",
        {
          headers: {
            Authorization:
              "Bearer rc_live_efdee4290ecb4cab8f9dc13c4f569407",
          },
        }
      );

      const result = await response.json();
      setCountries(result.data.objects);
    }

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.names.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-10">

      <h1 className="mb-10 text-center text-6xl font-bold text-amber-500">
        🌍 Countries
      </h1>

      <div className="mb-10 flex justify-center">
        <input
          type="text"
          placeholder="Search country by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xl rounded-xl border-2 border-amber-400 px-5 py-3 text-lg shadow-lg outline-none focus:border-amber-500"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">

        {filteredCountries.map((country) => {
          if (!country.flag?.url_png) return null;

          return (
            <div
              key={country.id}
              className="w-80 rounded-2xl border-2 border-amber-400 bg-white p-5 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-500">
                {country.names.common}
              </h2>

              <img
                src={country.flag.url_png}
                alt={country.names.common}
                className="h-48 w-full rounded-lg object-cover"
              />

              <div className="mt-5 space-y-2 text-center">

                <p>
                  <strong>Capital:</strong>{" "}
                  {country.capitals?.[0]?.name ?? "No Capital"}
                </p>

                <p>
                  <strong>Region:</strong> {country.region}
                </p>

                <p>
                  <strong>Languages:</strong>{" "}
                  {country.languages
                    ?.map((lang) => lang.name)
                    .join(", ")}
                </p>

                <p>
                  <strong>Population:</strong>{" "}
                  {country.population.toLocaleString()}
                </p>

              </div>

              <div className="mt-6 text-center">
                <Link
                  href={`/countries/${country.codes.alpha_3}`}
                  className="rounded-lg bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600"
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCountries.length === 0 && (
        <h2 className="mt-10 text-center text-3xl font-bold text-red-500">
          No countries found.
        </h2>
      )}
    </div>
  );
}
