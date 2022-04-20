import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height

const Map = () => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: -4.554560924691224,
        longitude: 105.40164063990737,
        latitudeDelta: 1,
        longitudeDelta: 2
      }}
    >
      <MapView.Marker
      coordinate={{
        latitude:-5.684788479939625, 
        longitude:105.06585369507452,
      }}
      title={"Pantai Gigi Hiu"}
      description={"Pantai terpencil dengan formasi batuan bergerigi"}
      />
    

    <MapView.Marker
      coordinate={{
        latitude:-5.311318046322803,
        longitude:105.2413913624646,
      }}
      title={"Puncak Mas"}
      description={"Gubuk & dek kayu properti artistik untuk selfie"}
      />

    <MapView.Marker
      coordinate={{
        latitude:-4.578918957509197,
        longitude:104.43050912057683,
      }}
      title={"Air Terjun Curup Gangsa"}
      description={"Air terjun dengan bebatuan dan pemandangan indah"}
      />

    <MapView.Marker
      coordinate={{
        latitude:-4.91829411346617,
        longitude:105.78513113066593,
      }}
      title={"Way Kambas"}
      description={"kawasan hutan lindung habitat badak, gajah, & harimau."}
      />

    <MapView.Marker
      coordinate={{
        latitude:-5.391120966584571,
        longitude: 104.34059138137012,
      }}
      title={"Taman Nasional Bukit Barisan"}
      description={"Barisan pegunungan dengan hutan bakau & habitat hutan."}
      />

    <MapView.Marker
      coordinate={{
        latitude:-4.813891208412445,
        longitude:104.37904356924282,
      }}
      title={"Air Terjun Putri Malu"}
      description={"Air terjun tinggi dan memiliki pemandangan indah"}
      />

    <MapView.Marker
      coordinate={{
        latitude:-5.176023109329018,
        longitude:104.26252727980784,
      }}
      title={"Nirwana Keramikan"}
      description={"wisata kawah yang memiliki pemandangan yang unik dan indah."}
      />

    <MapView.Marker
      coordinate={{
        latitude:-4.894755731867781,
        longitude:103.70688702258104,
      }}
      title={"Wisata Batu Mirau Malaya"}
      description={"Pantai indah yang tak kalah dengan pantai bali."}
      />

    </MapView>
  )
} 

const styles = StyleSheet.create({
  map: {
    height
  }
})

export default Map