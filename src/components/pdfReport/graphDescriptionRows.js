import React, { Fragment } from 'react';
import { Text } from '@react-pdf/renderer';

const GraphDescriptionRows = (props) => {
    const rows = props.data.map((item, index) =>
        <Text key={index}>{item.text}</Text>
    )
    return (<Fragment>{rows}</Fragment>)
};

export default GraphDescriptionRows