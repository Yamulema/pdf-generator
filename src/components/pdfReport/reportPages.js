import React, { Fragment } from 'react';
import { Text, View, StyleSheet, Svg, Line, Image } from '@react-pdf/renderer';
import GraphDescriptionRows from './graphDescriptionRows'

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 26,
        marginBottom: 5,
        fontFamily: 'Oswald',
        fontWeight: 700,
        color: '#1f4544'
    },
    sectionNarrative: {
        fontSize: 11,
        fontFamily: 'Roboto',
        fontWeight: 100,
        fontStyle: 'italic',
        marginBottom: 15,
    },
    sectionData: {
        marginBottom: 10,
        fontSize: 12,
        color: '#1f4544',
        textAlign: 'center',
        lineHeight: '1.9'
    },
    chartContainer: {
        textAlign: 'center',
        width: '100%',
        maxHeight: '280px',
    },
    chart: {
        margin: "0 auto",
        maxHeight: '400px',
        textAlign: 'center',
        alignSelf: 'center'
    }
});

const ReportPages = (props) => {
    const pages = props.data.map((page, index) =>
        <Fragment key={index}>
            <View>
                <Text style={styles.sectionTitle}>{page.title}</Text>
                <Text style={styles.sectionNarrative}>{page.narrative}</Text>
                <Svg height="15" width="100%">
                    <Line
                        x1="0"
                        y1="0"
                        x2="900"
                        y2="0"
                        strokeWidth={1}
                        stroke="rgb(220,220,220)"
                    />
                </Svg>
            </View>
            <View style={styles.sectionData}>
                <GraphDescriptionRows data={page.graphDescriptionRows} />
            </View>
            <View style={styles.chartContainer}>
                <Image
                    style={styles.chart}
                    src={page.image.base64}
                />
            </View>
            <View break></View>
        </Fragment>
    )
    return (<Fragment>{pages}</Fragment>)
};

export default ReportPages
