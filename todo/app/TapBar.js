import React from 'react';
import {View, StyleSheet} from 'react-native';
import TapBarItem from './TapBarItem';

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
    },
});

const TapBar = ({setType, type}) => (
    <View style={styles.container}>
        <TapBarItem type={type} title="All" setType={() => setType('All')} />
        <TapBarItem
            type={type}
            title="Active"
            setType={() => setType('Active')}
            border
        />
        <TapBarItem
            type={type}
            title="Complete"
            setType={() => setType('Complete')}
            border
        />
    </View>
);

export default TapBar;
