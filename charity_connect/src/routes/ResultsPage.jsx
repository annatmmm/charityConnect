import React from 'react';
import NavigationBar from '../components/navigation';

const ResultsPage = () => {
    return (
        <div className="Result">
            <NavigationBar/>
            <div className="App-header">
              <div className="title">
                <text>
                      Care Connect
                  </text>
              </div>
              <div className="intro">
                <text>
                    RESULT
                </text>
              </div>
            </div>
        </div>
    );
}

export default ResultsPage;