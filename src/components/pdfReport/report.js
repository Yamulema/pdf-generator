import React from 'react';
import { Page, Document, StyleSheet, Font } from '@react-pdf/renderer';
import Cover from './cover'
import ReportPages from './reportPages';
import Footer from './footer'
import documentSettings from '../../data/documentSettings'
import ThankYouPage from './thankYouPage';

Font.register({
    family: 'Roboto', fonts: [
        { src: 'https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Me5Q.ttf' },
        { src: 'https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9vAw.ttf', fontWeight: 500 },
        { src: 'https://fonts.gstatic.com/s/roboto/v29/KFOiCnqEu92Fr1Mu51QrIzc.ttf', fontStyle: 'italic', fontWeight: 100 },
    ]
});

const styles = StyleSheet.create({
    page: {
        padding: documentSettings.pagePadding,
        backgroundColor: documentSettings.backgroundColor,
        fontFamily: documentSettings.fontFamily
    }
});

const Report = (props) => (
    <Document>
        <Page size={documentSettings.pageSize} style={styles.page}>
            <Cover reportSettings={props.reportSettings} />
            <Footer reportSettings={props.reportSettings} />
            <ReportPages data={props.contentData} />
            <ThankYouPage reportSettings={props.reportSettings} />
        </Page>
    </Document>
);

export default Report