import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";

// This file is the main entry point for the home page of the car catalogue application.
export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;

  const allCars = await fetchCars({
    manufacturer: params.manufacturer || "",
    year: parseInt(params.year || "2022"),
    fuel: params.fuel || "",
    limit: parseInt(params.limit || "10"),
    model: params.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCard key={`${car.make}-${car.model}-${index}`} car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={Math.ceil(parseInt(params.limit || "10") / 10)}
              isNext={parseInt(params.limit || "10") > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
