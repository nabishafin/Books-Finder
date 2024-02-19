export const handleSort = (list, sortingValue) => {
  switch (sortingValue) {
    case "name_asc":
      return list.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }

        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    case "name_desc":
      return list.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA > nameB) {
          return -1;
        }

        if (nameA < nameB) {
          return 1;
        }

        return 0;
      });
    case "year_asc":
      return list.sort((a, b) => a.year - b.year);
    case "year_desc":
      return list.sort((a, b) => b.year - a.year);

    default:
      return list;
  }
};
