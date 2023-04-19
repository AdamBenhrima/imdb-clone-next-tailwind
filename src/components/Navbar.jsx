import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <section className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </section>
  );
};

export default Navbar;
