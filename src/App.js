import React, { Fragment, Component } from 'react';
import { PDFViewer } from '@react-pdf/renderer'
import Report from './components/pdfReport/report';
import LoadReport from './LoadReport';

class App extends Component {

  render() {
    return (
      <Fragment>
        <LoadReport />
        {/* <PDFViewer width="100%" height="800" >
          <Report />
        </PDFViewer> */}
      </Fragment>
    );
  }
}

export default App;