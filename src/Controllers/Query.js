export const graphQLendPoint = 'https://covidstat.info/graphql';

export const andhraQuery = `query {
    state(countryName: "India", stateName: "Andhra Pradesh") {
      state
      cases
      deaths
      historical {
        date
        cases
        deaths
        recovered
      }
      districts {
        district
        cases
        active
        deaths
        recovered
        todayCases
        todayDeaths
        todayRecovered
        historical {
          date
          cases
          deaths
          recovered
        }
      }
    }
  }`;
