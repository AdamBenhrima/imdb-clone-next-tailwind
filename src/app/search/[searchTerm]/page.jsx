import Card from "@/components/Card";

const SearchPage = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();

  const results = data.results;
  return (
    <>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No Results found</h1>
      )}
      {results && (
        <section className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
          {results
            .sort((a, b) => b.vote_count - a.vote_count)
            .map((result) => (
              <Card key={result.id} result={result} />
            ))}
        </section>
      )}
    </>
  );
};

export default SearchPage;
