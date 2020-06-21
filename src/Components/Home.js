import React, { Component } from 'react';
import { getAndhraDataWithHistorical14days } from '../Controllers/AndhraDataController';
import SyncedCursors from './Charts';
import { mock14Days } from './data';

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
    // this.setState({
    //   error: null,
    //   response: mock14Days,
    //   loading: false,
    // });
    getAndhraDataWithHistorical14days((error, response) => {
      this.setState({
        error,
        response: response.state,
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
                {this.state.response.districts.map((district) => {
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
            <SyncedCursors cursorData={this.state.response} />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
