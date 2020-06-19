import React, { Component } from 'react';
import { getAndhraDataWithoutHistorical } from '../Controllers/AndhraDataController';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      response: null,
    };
  }

  componentDidMount = () => {
    getAndhraDataWithoutHistorical((error, response) => {
      console.log('this is getAndhraDataWithHistorical', error, response);
      this.setState({
        error,
        response,
        loading: false,
      });
    });
  };

  render() {
    return (
      <div>
        {!this.state.loading && this.state.response && (
          <div>
            <table className="responsive-table">
              <thead>
                <tr>
                  <th>District</th>
                  <th>Total</th>
                  <th>Active</th>
                  <th>Recovered</th>
                  <th>Deaths</th>
                </tr>
              </thead>
              <tbody>
                {this.state.response.state.districts.map((district) => {
                  return (
                    <tr key={district.district}>
                      <td data-label={'District'}>{district.district}</td>
                      <td data-label={'Total'}>{district.cases}</td>
                      <td data-label={'Active'}>{district.active}</td>
                      <td data-label={'Recovered'}>{district.recovered}</td>
                      <td data-label={'Deaths'}>{district.deaths}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
