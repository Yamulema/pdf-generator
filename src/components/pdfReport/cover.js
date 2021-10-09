import React from 'react';
import { Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import logo from './../../assets/images/hawkeye.png';

Font.register({
    family: 'Oswald', fonts: [
        { src: 'https://fonts.gstatic.com/s/oswald/v40/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvgUE.ttf' },
        { src: 'https://fonts.gstatic.com/s/oswald/v40/TK3_WkUHHAIjg75cFRf3bXL8LICs1xZogUE.ttf', fontWeight: 700 },
    ]
});

const styles = StyleSheet.create({
    header: {
        height: '100%',
        flexDirection: 'row',
        paddingRight: 10
    },
    headerLogo: {
        width: '50px',
        alignSelf: 'center'
    },
    headerContent: {
        alignSelf: 'center',
        textAlign: 'right',
        flex: '1'
    },
    reportTitle: {
        fontSize: 46,
        fontFamily: 'Oswald',
        fontWeight: 700,
    },
    fromTo: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 5,
        fontWeight: 500,
    },
    scanDate: {
        fontSize: 16,
        fontWeight: 500,
    },
});

const Cover = (props) => (
    <View style={styles.header}>
        <Image style={styles.headerLogo} src={logo} />
        <View style={styles.headerContent}>
            <Text style={styles.reportTitle}>{props.reportSettings.title}</Text>
            <Text style={styles.fromTo}>{props.reportSettings.fromTo}</Text>
            <Text style={styles.scanDate}>{props.reportSettings.scanDate}</Text>
        </View>
    </View>
);

export default Cover