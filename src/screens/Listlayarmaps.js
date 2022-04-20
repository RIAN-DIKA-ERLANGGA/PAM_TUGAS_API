import React from 'react'
    import { SafeAreaView } from 'react-navigation'
    import {View,StyleSheet,Linking,Button} from 'react-native'
    import Header from './Komponen/header'
    
    
    const Listlayarmaps = ({ navigation }) => {
      return (
        <SafeAreaView forceInset={{ top: 'always' }}>
          <View>
        <Header textHeader={'List Detail Wisata'} />
      </View>
        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://jejakpiknik.com/curup-gangsa/');

         }}

         title="Air Terjun Curup Gangsa"

        />
        </View>

        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://www.lampung.co/blog/air-terjun-putri-malu-way-kanan-lampung-surga-tersembunyi-di-hutan-belantara/');

         }}

         title="Air Terjun Putri Malu"

        />
        </View>

        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://travelingyuk.com/eksotisme-kawah-nirwana-suoh/134438/');

         }}

         title="Nirwana Keramikan"

        />
        </View>

        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://indonesia.go.id/ragam/pariwisata/pariwisata/pantai-gigi-hiu-surga-tersembunyi-di-tanah-lampung');

         }}

         title="Pantai Gigi Hiu"

        />
        </View>

        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://www.nativeindonesia.com/puncak-mas-lampung/');

         }}

         title="Puncak Mas"

        />
        </View>

        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://travel.tempo.co/read/1299648/ke-taman-nasional-bukit-barisan-selatan-ini-5-destinasi-wajib/full&view=ok');

         }}

         title="Taman Nasional Bukit Barisan"

        />
        </View>

        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://www.cindriyanto.com/2018/05/pantai-batu-mirau-wisata-unggulan-di.html');

         }}

         title="Pantai Batu Mirau Malaya"

        />
        </View>

        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://travel.kompas.com/read/2014/02/03/1524254/Way.Kambas.Taman.Nasional.Tertua.di.Indonesia?page=all');

         }}

         title="Way Kambas"

        />
        </View>

        </SafeAreaView>
      )
    }
    const styles = StyleSheet.create({

      buttonContainer: {

        margin: 20
      }

    })

    
    export default Listlayarmaps