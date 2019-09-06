import React, { Component } from 'react';
import { Platform, PermissionsAndroid, View, Text } from 'react-native';
import RNFS from 'react-native-fs';
import Toast from 'react-native-easy-toast';

export const createFile = (uriVideo, stringComplete) => {

  permissaoAndroid();

  let fileName = uriVideo.split('/')
  fileName = fileName[fileName.length - 1]
  fileName = fileName.split('.')
  fileName = fileName[0] + '.srt'

  let routePath = (Platform.OS === 'android')
    ?
    RNFS.ExternalStorageDirectoryPath + '/Legendas/'
    :
    RNFS.LibraryDirectoryPath + '/Legendas/'

  const constRoutePath = routePath
  const constFileName = fileName
  const constFileUri = routePath + fileName

  checkPath(constRoutePath, constFileUri, stringComplete)
}

const checkPath = (pathUri, fileUri, stringComplete) => {
  RNFS.exists(pathUri)
    .then((result) => {
      alert(result)
      resultCheck(result, fileUri, stringComplete);
    })
    .catch((error) => {
      alert('aquio' + error)
    })
}

const resultCheck = (result, fileUri, stringComplete) => {
  if (result) {
    writeFile(fileUri, stringComplete);
  }
  else {
    RNFS.mkdir(state.uriOrig)
      .then((result) => {
        alert('Criando a pasta');
        writeFile(fileUri, stringComplete);
      })
      .catch((err) => {
        alert('erro: ' + err);
      })
  }
}

const writeFile = (fileUri, stringToFile) => {
  RNFS.writeFile(fileUri, stringToFile, 'utf8')
    .then((success) => {
      alert('Arquivo criado');
    })
    .catch((err) => {
      alert('Erro: ' + err);
    })
}

async function permissaoAndroid() {
  if (Platform.OS == 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          'title': 'Acessar a Galeria',
          'message': 'Este aplicativo precisar acessar a sua galeria' +
            'para procurar o vídeo.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Read External Storage permission accepted");
        return true;
      } else {
        console.log("Read External permission denied");
        return false;
      }
    } catch (err) {
      console.warn(err)
    }
  }
  else {
    return true;
  }
}