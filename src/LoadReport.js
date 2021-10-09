import React, { Component } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import axios from "axios";
import imageToBase64 from 'image-to-base64/browser';
import Report from './components/pdfReport/report';
import reportSettings from './data/reportSettings';
import pageContentData from './data/pageContentData';

export default class LoadReport extends Component {
  constructor() {
    super();
    this.state = { contentData: [] }
  }

  componentDidMount() {
    //load data from json file
    var data = { pageContentData };

    this.fetchPagesData(data.pageContentData)
      .then(response => {
        const allData = data.pageContentData.map((item, index) => {
          item.image = response[index];
          return item;
        })

        this.setState({
          contentData: allData
        });
      })
  }

  fetchBase64Content = async (url) => {
    const response = await imageToBase64(url);
    return {
      base64: "data:image/png;base64," + response
    }
  }

  fetchChartUrl = async (item) => {
    const exportHighChartsUrl = "https://export.highcharts.com/";
    const response = await axios({
      method: 'post',
      url: exportHighChartsUrl,
      data: {
        options: item,
        async: true,
        type: "image/png",
      }
    });
    return {
      url: exportHighChartsUrl + response.data
    }
  }

  fetchPagesData = async (pagesData) => {
    const requests = pagesData.map((item) => {
      return this.fetchChartUrl(item.chartOptionsValues)
        .then((response) => {
          return this.fetchBase64Content(response.url);
        })
    })
    return Promise.all(requests)
  }

  render() {
    const { contentData } = this.state;

    return (
      <div>
        <h3>Test download report</h3>
        <hr />
        {contentData.length > 0 &&
          <div>
            <PDFDownloadLink
              document={<Report reportSettings={reportSettings} contentData={contentData} />} fileName="report.pdf">
              {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
            </PDFDownloadLink>
          </div>
        }
      </div>
    );
  }
}