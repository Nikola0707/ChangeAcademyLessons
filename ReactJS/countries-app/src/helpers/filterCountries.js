export const filterCountries = (countries, searchTerm) => {
  return countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
