import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, ScrollView, TouchableHighlight } from 'react-native';
// import myCustomStyles from './_styles';      // Aqui podem importar estilos 

export default function HomeScreen() {

  const [text, funcao] = React.useState('Useless Text');
  const [numeroDeCliques, setNumeroDeCliques] = React.useState(0);

  const submitValues = () => {
    console.log(text);
  }

  const handleButtonClick = () => {
    setNumeroDeCliques(numeroDeCliques + 1);
  }

  const handleTouch = () => {
    console.log("Clicou na Imagem!!!!");
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{maxWidth: 500}}>
      <Text style={styles.title}>React Native é Show!</Text>
      <View style={styles.meuBotao}>
        <Button title={"Este botão foi pressionado " + numeroDeCliques + ' vezes!'} onPress={handleButtonClick}></Button>
      </View>
      <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text>Home</Text>
        <View style={{backgroundColor: 'blue', padding: 50}}>
          <Text style={{color: 'white'}}>Texto de uma view</Text>
        </View>
        
        <View style={{backgroundColor: 'red', padding: 50}}>
          <TouchableHighlight onPress={handleTouch}>
            <Image style={styles.logo} source={{uri: 'https://miro.medium.com/v2/resize:fit:1024/1*xDi2csEAWxu95IEkaNdFUQ.png'}}></Image>
          </TouchableHighlight>
        </View>
        <Link href="/cadastro">Ir para a tela de cadastro</Link>
        <Link href="/listagem">Ir para a tela de listagem</Link>
        <Link href="/login">Ir para a tela de login</Link>
        <Link href="/sobre">Ir para a tela de sobre</Link>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={funcao}
            value={text}
          />
          <Button title='Enviar dados' onPress={submitValues}></Button>
        </View>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  meuBotao: {
    margin: 20
  },
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});