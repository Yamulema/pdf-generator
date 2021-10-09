import React from 'react';
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
    family: 'Audiowide', 
    fonts: [
        { src: 'https://fonts.gstatic.com/s/audiowide/v9/l7gdbjpo0cum0ckerWCtkQ.ttf' }
    ]
});

const styles = StyleSheet.create({
    header: {
        height: '100%',
        flexDirection: 'row',
    },
    headerContent: {
        alignSelf: 'center',
        textAlign: 'center',
        flex: '1'
    },
    reportTitle: {
        fontSize: 42,
        fontFamily: 'Audiowide',
        fontWeight: 700,
        color: "#6f4695"
    }
});

const ThankYouPage = (props) => (
    <View style={styles.header}>
        <View style={styles.headerContent}>
            <Text style={styles.reportTitle}>{props.reportSettings.companyName}</Text>
        </View>
    </View>
);

export default ThankYouPage