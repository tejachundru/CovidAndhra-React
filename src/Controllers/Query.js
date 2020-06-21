export const graphQLendPoint = 'https://covidstat.info/graphql';

export const andhraQuerywithHistorical = `query {
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

export const andhraQuery = `query {
    state(countryName: "India", stateName: "Andhra Pradesh") {
      state
      cases
      deaths
      districts {
        district
        cases
        active
        deaths
        recovered
        todayCases
        todayDeaths
        todayRecovered
      }
    }
  }`;

export const andhraQuerywithHistorical14days = `query {
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
