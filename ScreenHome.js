import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { i18n } from './strings.js';
import  ImageSources  from './ImageSources.js';
import  MenuButton  from './view/MenuButton.js';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: i18n.t("luckyPig"),
        };
    render() {
        const navigating = this.props.navigation.navigate;
        return (
        <View style={styles.container}>
        <Image source={ImageSources.luckyPig.uri} style={styles.mainImage}/>
        <MenuButton text={i18n.t("countPoints")} onPress={() => navigating('Play')} customStyle={styles.menu_button} />

        <View style={styles.container_horizontal}>
            <MenuButton text={i18n.t("rules")} onPress={() => navigating('Rules')} customStyle={styles.menu_button} />
            <MenuButton text={i18n.t("history")} onPress={() => navigating('History')} customStyle={styles.menu_button} />
        </View>
        </View>
        );
    }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 5,
      backgroundColor: '#faeff1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container_horizontal: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menu_button: {
        width: "40%",
        margin: 5,
    },
    mainImage: {
        resizeMode:"center",
        width: 193,
        height: 110
    }
  });