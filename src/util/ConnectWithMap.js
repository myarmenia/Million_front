import {Linking, Platform} from "react-native";

export const openGps = (lat, lng, label="") => {
    const latitude = lat;
    const longitude = lng;
    const labele = label;

    const url = Platform.select({
        ios: "maps:" + latitude + "," + longitude + "?q=" + labele,
        android: "geo:" + latitude + "," + longitude + "?q=" + labele
    });
    Linking.openURL(
        Platform.OS === 'ios'
            ? `googleMaps://app?saddr=${latitude}+${longitude}&daddr=6.909877+79.848521`
            : `google.navigation:q=${latitude}+${longitude}`,
    )
    // Linking.canOpenURL(url).then(supported => {
    //     if (supported) {
    //         return Linking.openURL(url);
    //     } else {
    //         const browser_url =
    //             "https://www.google.de/maps/@" +
    //             latitude +
    //             "," +
    //             longitude +
    //             "?q=" +
    //             label;
    //         return Linking.openURL(browser_url);
    //     }
    // });
}
