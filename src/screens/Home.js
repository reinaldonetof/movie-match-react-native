import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Drawer from 'react-native-drawer';

import { NewButton, ContinueButton } from './ButtonsHome';
import BackgroundSide from '../assets/fundo/background.jpeg';
import NameLogo from '../assets/logo/NOME_APLICATIVO.png';
import LogoSemFundo from '../assets/logo/LOGO_SEMFUNDO_APLICATIVO.png';
import { styleGlobal } from './StyleGlobal';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projeto: 'novo'
    }
    this.newProject = this.newProject.bind(this);
  }

  newProject() {
    this._drawer.open();
    let s = this.state;
    s.projeto = 'continue';
    this.setState(s);
  }

  contentDrawer = () => {
    return (
      <View style={styles.sideDrawer}>
        <ImageBackground source={BackgroundSide} style={{ height: '100%', opacity: 0.9 }}>
          <View style={styles.logo}>
            <TouchableOpacity onPress={() => { this._drawer.close() }}>
              <Image source={LogoSemFundo} resizeMode={'contain'} style={{ width: 120 }} />
            </TouchableOpacity>
          </View>

          <View>

            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }} onPress={() => { this.props.navigation.navigate('searchVideo') }}>
              <Icon name="video-library" size={28} color={styleGlobal.colorIcon} />
              <Text style={styles.textButton}>Buscar Vídeo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }} onPress={() => { this.props.navigation.navigate('homeToLyrics') }}>
              <Icon name="library-books" size={28} color={styleGlobal.colorIcon} />
              <Text style={styles.textButton}>Adicionar a Legenda</Text>
            </TouchableOpacity>

          </View>
        </ImageBackground>
      </View>
    )
  }

  continueButton = () => {
    return (
      <View style={styles.continueLayout}>
        <TouchableOpacity style={styles.button} onPress={() => { this.newProject() }}>
          <ContinueButton />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { this.newProject() }}>
          <NewButton params={{ props: 'continue' }} />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <Drawer
        type="overlay"
        ref={(ref) => this._drawer = ref}
        content={<this.contentDrawer />}
        openDrawerOffset={0.3}
        styles={styles.drawer}
      >
        <LinearGradient colors={styleGlobal.backgroundGlobal} style={styles.lgcontainer}>
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.iconHeader} onPress={() => { this.props.navigation.navigate('optionHome') }}>
                <Icon name="settings" size={28} color={styleGlobal.colorIcon} />
              </TouchableOpacity>
              <Image resizeMode={'contain'} style={styles.imageHeader} source={NameLogo} />
            </View>

            <View style={styles.areaButton}>
              {
                this.state.projeto === 'novo' ?
                  (
                    <TouchableOpacity style={styles.button} onPress={() => { this.newProject() }}>
                      <NewButton params={{ props: 'novo' }} />
                    </TouchableOpacity>
                  )
                  : (
                    <this.continueButton />
                  )
              }
            </View>

          </View>
        </LinearGradient>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
  container: {
    flex: 1
  },
  lgcontainer: {
    flex: 1
  },
  header: {
    alignItems: 'center',
    height: '20%',
  },
  imageHeader: {
    color: '#D8BFD8',
    width: '90%',
    marginTop: 15,
  },
  iconHeader: {
    padding: 10,
    marginHorizontal: 10,
    alignSelf: 'flex-end'
  },
  areaButton: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    paddingTop: '30%',
  },
  button: {
    width: '100%',
    height: 50,
  },
  sideDrawer: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.5)'
  },
  logo: {
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%'
  },
  continueLayout: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
  textButton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f6e7f9',
    marginLeft: 10
  },
})