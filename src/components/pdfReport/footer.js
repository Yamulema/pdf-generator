import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    footer: {
        width: '108%',
        position: 'absolute',
        bottom: 0,
        height: '28px',
        textAlign: 'center',
        fontSize: 8,
        flexDirection: 'row',
        backgroundColor: '#6f4695',
        borderTop: '3px',
        borderColor: 'red',
        color: 'white',
    },
    footerInfoContainer: {
        flexDirection: "row",
        alignSelf: "flex-end" 
    },
    footerDate: {
        textAlign: 'left',
        alignSelf: 'center',
        flex: '1',
        paddingLeft: '15px'
    },
    footerCopyright: {
        textAlign: 'left',
        alignSelf: 'center',
        flex: '1',
    },
    footerBusinessInfo: {
        alignSelf: 'center',
        flex: '2',
    }
});

const Footer = (props) => (
    <View style={styles.footer} fixed>
        <View style={styles.footerDate}>
            <Text>{props.reportSettings.date}</Text>
        </View>
        <View style={styles.footerCopyright}>
            <Text>{props.reportSettings.copyrightText}</Text>
        </View>
        <View style={styles.footerBusinessInfo}>
            <View style={styles.footerInfoContainer}>
                <Text style={{ paddingRight: '20px' }}>{props.reportSettings.website}</Text>
                <Text style={{ paddingRight: '20px' }}>{props.reportSettings.email}</Text>
                <Text style={{ paddingRight: '25px' }}>{props.reportSettings.phone}</Text>
            </View>
        </View>
    </View>
);

export default Footer