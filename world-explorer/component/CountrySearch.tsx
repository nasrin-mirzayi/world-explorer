"use client"

import { useState } from "react"
import Link from "next/link"

type Props = {
  countries: any[]
}

export default function CountrySearch({ countries }: Props) {
  const [search, setSearch] = useState("")

  const filteredCountries =
    search.trim() === ""
      ? []
      : countries.filter((country) =>
          country.names.common
            .toLowerCase()
            .includes(search.toLowerCase())
        )

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mx-auto mb-8 block w-full max-w-lg rounded-lg border border-yellow-500 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      {search.trim() === "" ? (
        <p className="text-center text-lg text-gray-500">
          Start typing to search for a country.
        </p>
      ) : filteredCountries.length === 0 ? (
        <p className="text-center text-lg text-red-500">
          No countries found.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {filteredCountries.map((country) => (
            <div
              key={country.id}
              className="w-80 rounded-xl border-2 border-amber-400 p-6 shadow-xl"
            >
              <h2 className="mb-4 text-center text-2xl font-bold text-yellow-600">
                {country.names.common}
              </h2>

              <img
                src={country.flag.url_png}
                alt={country.names.common}
                className="h-48 w-full rounded-lg object-cover"
              />

              <div className="mt-4 space-y-2 text-center">
                <p>
                  <span className="font-semibold">Capital:</span>{" "}
                  {country.capitals?.[0]?.name ?? "No capital"}
                </p>

                <p>
                  <span className="font-semibold">Region:</span>{" "}
                  {country.region}
                </p>

                <p>
                  <span className="font-semibold">Population:</span>{" "}
                  {country.population.toLocaleString()}
                </p>

                <p>
                  <span className="font-semibold">Languages:</span>{" "}
                  {country.languages
                    ?.map((lang: any) => lang.name)
                    .join(", ")}
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <Link href={`/countries/${country.codes.alpha_3}`}>
                  <button className="rounded bg-yellow-600 px-4 py-2 text-white transition hover:bg-blue-700">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}