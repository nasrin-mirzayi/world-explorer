import CountrySearch from "../../component/CountrySearch"

export default async function SearchPage() {
  const response = await fetch(
    "https://api.restcountries.com/countries/v5",
    {
      cache: "force-cache",
      headers: {
        Authorization:
          "Bearer rc_live_efdee4290ecb4cab8f9dc13c4f569407",
      },
    }
  )

  const result = await response.json()
  const countries = result.data.objects

  return (
    <main className="container mx-auto px-6 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold text-yellow-600">
        Search Countries
      </h1>

      <CountrySearch countries={countries} />
    </main>
  )
}