import React from 'react';
import NavigationBar from '../components/navigation';
import Result from '../components/result';

const ResultsPage = () => {
    return (
        <div className="App">
            <NavigationBar/>
            <div className="results_title">
                <text>
                  Search Result
                </text>
            </div>

            <div className="results_area">
              <Result/>
              <Result/>
              <Result/>
            </div>
        </div>
    );
}

export default ResultsPage;