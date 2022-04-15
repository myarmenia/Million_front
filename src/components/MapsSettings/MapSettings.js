import {Button, Platform, ScrollView, StyleSheet, Switch, Text, View} from "react-native";
import React from "react";

export const MapSettings = ({setHighAccuracy,
                                highAccuracy,
                         setSignificantChanges,
                         significantChanges,
                         setLocationDialog,
                         locationDialog,
                         setForceLocation,
                         forceLocation,
                         setUseLocationManager,
                         useLocationManager,
                         setForegroundService,
                         foregroundService,
                         getLocationUpdates,
                         observing,
                         removeLocationUpdates,
                         location

}) => {
    return(
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            <View>
                <View style={styles.option}>
                    <Text>Enable High Accuracy</Text>
                    <Switch onValueChange={setHighAccuracy} value={highAccuracy} />
                </View>

                {Platform.OS === 'ios' && (
                    <View style={styles.option}>
                        <Text>Use Significant Changes</Text>
                        <Switch
                            onValueChange={setSignificantChanges}
                            value={significantChanges}
                        />
                    </View>
                )}

                {Platform.OS === 'android' && (
                    <>
                        <View style={styles.option}>
                            <Text>Show Location Dialog</Text>
                            <Switch
                                onValueChange={setLocationDialog}
                                value={locationDialog}
                            />
                        </View>
                        <View style={styles.option}>
                            <Text>Force Location Request</Text>
                            <Switch
                                onValueChange={setForceLocation}
                                value={forceLocation}
                            />
                        </View>
                        <View style={styles.option}>
                            <Text>Use Location Manager</Text>
                            <Switch
                                onValueChange={setUseLocationManager}
                                value={useLocationManager}
                            />
                        </View>
                        <View style={styles.option}>
                            <Text>Enable Foreground Service</Text>
                            <Switch
                                onValueChange={setForegroundService}
                                value={foregroundService}
                            />
                        </View>
                    </>
                )}
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttons}>
                    <Button
                        title="Start Observing"
                        onPress={getLocationUpdates}
                        disabled={observing}
                    />
                    <Button
                        title="Stop Observing"
                        onPress={removeLocationUpdates}
                        disabled={!observing}
                    />
                </View>
            </View>
            <View style={styles.result}>
                <Text>Latitude: {location?.coords?.latitude || ''}</Text>
                <Text>Longitude: {location?.coords?.longitude || ''}</Text>
                <Text>Heading: {location?.coords?.heading}</Text>
                <Text>Accuracy: {location?.coords?.accuracy}</Text>
                <Text>Altitude: {location?.coords?.altitude}</Text>
                <Text>Altitude Accuracy: {location?.coords?.altitudeAccuracy}</Text>
                <Text>Speed: {location?.coords?.speed}</Text>
                <Text>Provider: {location?.provider || ''}</Text>
                <Text>
                    Timestamp:{' '}
                    {location?.timestamp
                        ? new Date(location.timestamp).toLocaleString()
                        : ''}
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        //zIndex:999
    },
    contentContainer: {
        padding: 12,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 12,
    },
    result: {
        borderWidth: 1,
        borderColor: '#666',
        width: '100%',
        padding: 10,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 12,
        width: '100%',
    },
});
