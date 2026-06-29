// import Link from "next/link";

// type Props = {
//   params: {
//     code: string;
//   };
// };

// export default async function CountryDetail({ params }: Props) {
//   const response = await fetch(
//     `https://api.restcountries.com/countries/v5/codes.alpha_3/${params.code}`,
//     {
//       cache: "no-store",
//       headers: {
//         Authorization: "Bearer rc_live_efdee4290ecb4cab8f9dc13c4f569407",
//       },
//     }
//   );

//   const result = await response.json();
//   console.log(result)
//   const country = result.data.objects[0];


//   return (
//     <div className="max-w-3xl mx-auto p-8">
//       <img
//         src={country.flag.url_png}
//         alt={country.names.common}
//         width={250}
//       />

//       <h1 className="text-4xl font-bold mt-4">
//         {country.names.common}
//       </h1>

//       <p>Capital: {country.capitals?.[0]?.name ?? "no capital"}</p>

//       <p>Region: {country.region}</p>

//       <p>Subregion: {country.subregion}</p>

//       <p>
//         Languages:{" "}
//         {country.languages
//         ?.map((lang: any) => lang.name).join(", ")}
//       </p>

//       <p>Population: {country.population.toLocaleString()}</p>

//       <p>
//         Currencies:{" "}
//         {country.currencies.map((currency: any) => currency.name).join(", ")}
//       </p>

//       <p>
//         Time Zones: {country.timezones?.join(", ") ?? "N/A"}
//       </p>

//       <a
//         href={country.links.google_maps}
//         target="_blank"
//         className="text-blue-600 underline"
//       >
//         Google Maps
//       </a>

//       <br />
//       <br />

//       <Link
//         href="/countries"
//         className="bg-gray-700 text-white px-4 py-2 rounded"
//       >
//         ← Back
//       </Link>
//     </div>
//   );
// }