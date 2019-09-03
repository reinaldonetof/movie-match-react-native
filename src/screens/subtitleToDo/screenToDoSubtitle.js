import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import { styleGlobal } from '../StyleGlobal';
import { connect } from 'react-redux';

import LetraInicio from '../../assets/letras/INICIO_APLICATIVO.png';
import LetraFim from '../../assets/letras/FIM_APLICATIVO.png';
import PlayIcon from '../../assets/icones/PLAY_APLICATIVO.png';
import LetsRock from '../../assets/letras/LETS_ROCK.png';

export class screenToDoSubtitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0.0,
      pausedVideo: false,
      arrayColor: ['#9ab68b', '#f6e7f9', '#ffff00',],
      buttonRock: true,
      controller: false,
      lyricsArray: [],
    }

    this.cutLyrics = this.cutLyrics.bind(this);
  }

  componentDidMount() {
    let array = this.state.lyricsArray;
    array = this.props.lyrics;

    let s = this.state;
    s.lyricsArray = array;
    this.setState(s);
  }

  cutLyrics = () => {
    this.setState({
      lyricsArray: this.state.lyricsArray.filter((value, index) => {
        return index !== 0
      })
    });
  }


  ButtonsToDo = () => {
    return (
      <View style={styles.areaButtonsInFIm}>
        <View style={{ flex: 2 }}>
          <TouchableOpacity style={styles.areaButtons} onPress={() => { }}>
            <View style={styles.buttonInFim}>
              <Image source={LetraInicio} resizeMode={'contain'} style={{ width: '90%' }} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.areaButtons}
            onPress={() => { this.player.seek(this.state.currentTime - 10) }}>
            <Icon name="replay-10" size={28} color={styleGlobal.colorIcon} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.areaButtons}
            onPress={() => { this.setState({ controller: !this.state.controller }) }}>
            <Icon name="videogame-asset" size={28} color={styleGlobal.colorIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.areaButtons}
            onPress={() => { this.setState({ pausedVideo: !this.state.pausedVideo }) }}>
            {
              (this.state.pausedVideo === false)
                ?
                <Icon name="pause-circle-outline" size={36} color={styleGlobal.colorIcon} />
                :
                <Icon name="play-circle-outline" size={36} color={styleGlobal.colorIcon} />
            }
          </TouchableOpacity>

          <TouchableOpacity style={styles.areaButtons}
            onPress={() => { }}>
            <Icon name="save" size={28} color={styleGlobal.colorIcon} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.areaButtons}
            onPress={() => { this.player.seek(this.state.currentTime + 10) }}>
            <Icon name="forward-10" size={28} color={styleGlobal.colorIcon} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2 }}>
          <TouchableOpacity style={styles.areaButtons} onPress={() => { this.cutLyrics() }}>
            <View style={styles.buttonInFim}>
              <Image source={LetraFim} resizeMode={'contain'} style={{ width: '75%' }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    return (
      <LinearGradient colors={styleGlobal.backgroundGlobal} style={styles.lgcontainer}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 3, backgroundColor: 'transparent' }}>
            <Video
              source={{ uri: this.props.uriVideoPath }}
              ref={(ref) => {
                this.player = ref
              }}                                      // Store reference
              style={styles.backgroundVideo}
              onProgress={({ currentTime }) => { this.setState({ currentTime }) }}
              onLoad={() => {
                this.setState({ pausedVideo: true })
              }}
              controls={this.state.controller}
              paused={this.state.pausedVideo}
            />
          </View>

          {
            (this.state.buttonRock === false)
            &&
            <View style={styles.areaLegenda}>
              { (this.state.lyricsArray.length > 0) && <Text style={styles.textoPrimeiro}>{this.state.lyricsArray[0]}</Text>}
              { (this.state.lyricsArray.length > 1) && <Text style={styles.textoSecundario}>{this.state.lyricsArray[1]}</Text>}
            </View>
          }

          <View style={{ flex: 2, marginBottom: 40 }}>
            {
              (this.state.buttonRock === true)
                ?
                <TouchableOpacity style={styles.buttonRock} onPress={() => {

                  this.setState({ pausedVideo: !this.state.pausedVideo, buttonRock: !this.state.buttonRock })
                }}>
                  <View style={styles.viewButtonRock}>
                    <Image style={styles.logoImg} source={PlayIcon} />
                    <Image style={[styles.logoImg, { width: 80, marginLeft: 5 }]} source={LetsRock} />
                  </View>
                </TouchableOpacity>
                :
                <this.ButtonsToDo />
            }
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  lgcontainer: {
    flex: 1
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
  },
  touchDrawer: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    alignItems: 'center'
  },
  buttonRock: {
    width: '50%',
    height: 50,
    marginHorizontal: '25%'
  },
  viewButtonRock: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#a3bd95',
    backgroundColor: '#9ab68b'
  },
  logoImg: {
    marginLeft: 10,
    marginRight: 10,
    width: 35,
    resizeMode: 'contain'
  },
  areaButtonsInFIm: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  areaButtons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonInFim: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#431',
    justifyContent: 'center',
    alignItems: 'center'
  },
  areaLegenda: {
    flex: 1,
    marginTop: -10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  textoPrimeiro: {
    textAlign: 'center',
    fontSize: 18,
    color: '#DDD',
    backgroundColor:'rgba(0,0,255,0.2)',
    width:'100%'
  },
  textoSecundario: {
    textAlign: 'center',
    fontSize: 12,
    color: '#AAA',
  }
})

const mapStateToProps = (state) => {
  return {
    lyrics: state.lyrics.inputLyric,
    uriVideoPath: state.video.uriVideoPath,
  }
}

const screenToDoSubtitleConnect = connect(mapStateToProps, {})(screenToDoSubtitle);
export default screenToDoSubtitleConnect;
