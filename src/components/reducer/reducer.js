export default function reducer(state, act) {
  console.log(state);
  switch (act.type) {
    case "SET_COUNTRY_LIST": {
      return { ...state, countryList: act.payload };
    }

    case "SET_COUNTRY_BY_NAME": {
      const countryListByName = (state.countryList || []).filter((country) =>
        country.name.toLowerCase().includes(act.payload.toLowerCase())
      );
      return { ...state, countryListByName };
    }
    case "FILTER_BY_REGION": {
      const { regionSelected } = act.payload;
      if ("" === regionSelected) {
        return { ...state, countryFilteredByRegion: [], filterByRegion: "" };
      }

      const countryFilteredByRegion = state.countryList.filter(
        (country) => country.region === regionSelected
      );

      return {
        ...state,
        countryFilteredByRegion,
        filterByRegion: regionSelected,
      };
    }

    default: {
      return state;
    }
  }
}
