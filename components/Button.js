import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";
/* Componente botón: descripcion de props
    text: el texto mostado en el botón
    onPress: accion a ejecutar en el onPress del botón (TouchableOpacity)
    estilo: tamaño, color y sombra del botón
    key: identificador key del botón
    color: color del texto del botón
    imageUrl: url de la imagen del botón
    position: si la imagen va a la izquierda o derecha del texto del botón
*/
const Button = ({ text, onPress, estilo, key, color, imageUrl }) => {
  const renderIcon = () => {
    if (imageUrl) {
      return (
        <Image
          source={imageUrl}
          style={styles.icon}
          resizeMode="contain"
        />
      );
    }
    return null;
  };

  const renderContent = () => {
    return (
      <View style={[styles.content, {display: 'flex', alignItems: 'center', justifyContent: 'center'}]}>
        {renderIcon()}
        <Text style={[styles[color], {marginTop: 5}]}>{text}</Text>
        
      </View>
    );
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.btn, styles[estilo]]}
        key={key}
      >
        {renderContent()}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  textWhite: {
    fontSize: 30,
    color: "#ffffff",
    top: 30
  },
  gameBtn: {
    backgroundColor: 'rgba(255, 127, 165, 1)',
    borderColor: "transparent",
    borderRadius: 15,
    width: 190,
    height: 150,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
    top: 30,
  },
  msgBtn: {
    backgroundColor: 'rgba(255, 127, 165, 1)',
    borderColor: "transparent",
    borderRadius: 15,
    width: 400,
    height: 150,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
    top: 30,
  },
  gamesBtn: {
    backgroundColor: 'rgba(255, 127, 165, 1)',
    borderColor: "transparent",
    borderRadius: 15,
    width: 400,
    height: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
    top: 30,
  },
  icon: {
    position: "absolute",
    height: 70.33333396911621,
    width: 60.473384857177734,
    left: '0',
    top: -34,
    
  },
});

export default Button;