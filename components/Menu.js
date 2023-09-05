import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './Button.js';
import HeaderPanel from "./HeaderPanels/HeaderPanel.js";


export default function Consejos() {
  return (
    <View>
      <HeaderPanel OnPressBack={() => { console.log('Vuelve a inicio') }} />
      <Image source={require("../assets/brain.png")} style={styles.brain}/>
        <View>
          <View style={styles.contenido}>
              <Button
                imageUrl={require("../assets/dish.png")}
                text="Mensajes"
                estilo="msgBtn"
                position='izquierda'
                color="textWhite"/>
                <View style={styles.row}>
                    <Button
                    imageUrl={require("../assets/heart.png")}
                    text="Cuenta"
                    estilo="gameBtn"
                    position='izquierda'
                    color="textWhite"/>
                    <Button
                    imageUrl={require("../assets/led.png")}
                    text="Consejos"
                    estilo="gameBtn"
                    position='izquierda'
                    color="textWhite"/>
                </View>
                <Button
                text="Juegos"
                estilo="gamesBtn"
                color="textWhite"/>
                <View style={styles.row}>
                    <Button
                    imageUrl={require("../assets/dish.png")}
                    text="Familia"
                    estilo="gameBtn"
                    position='izquierda'
                    color="textWhite"/>
                    <Button
                    imageUrl={require("../assets/dish.png")}
                    text="Musica"
                    estilo="gameBtn"
                    position='izquierda'
                    color="textWhite"/>
                </View>
          </View>
          <Button/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  contenido: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 35,
    color: 'rgba(0, 0, 0, 0.75)',
  },
  brain: {
    top: 150,
    left: 200,
    position: 'absolute',
    height: 101,
    width: 87,
  },
});