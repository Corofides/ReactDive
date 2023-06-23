import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import ChevronUp from './svgs/ChevronUp';
import ChevronDown from './svgs/ChevronDown';

export default function App() {

  const [newFish, setNewFish] = useState({
    type: "",
    size: "",
    weight: "",
    location: ""
  });

  const [displayForm, setDisplayForm] = useState(false);

  const fish = [

    {
      id: 1,
      type: "Carp",
      size: 20,
      weight: 3,
      location: "Hartlepool"
    },
    {
      id: 2,
      type: "Carp",
      size: 20,
      weight: 3,
      location: "Hartlepool"
    },
    {
      id: 3,
      type: "Carp",
      size: 20,
      weight: 3,
      location: "Hartlepool"
    },
    {
      id: 4,
      type: "Carp",
      size: 20,
      weight: 3,
      location: "Hartlepool"
    },
    {
      id: 5,
      type: "Carp",
      size: 20,
      weight: 3,
      location: "Hartlepool"
    },
    {
      id: 6,
      type: "Carp",
      size: 20,
      weight: 3,
      location: "Hartlepool"
    },
    {
      id: 7,
      type: "Carp",
      size: 20,
      weight: 3,
      location: "Hartlepool"
    },
    {
      id: 8,
      type: "Carp",
      size: 20,
      weight: 3,
      location: "Hartlepool"
    },


  ];

  const fishType = [
    {
      id: 1,
      name: "Carp",
    },
    {
      id: 1,
      name: "Pike",
    },
    {
      id: 1,
      name: "Brown Trout",
    },
    {
      id: 1,
      name: "Rainbow Trout",
    }
  ]

  return (
    <View style={styles.container}>
      <ScrollView style={{width: "100%"}}>
        {fish.map(({id, type, size, weight, location}) => {

          return (
            <View key={id} style={styles.row}>
              <Image source={require('./assets/icon.png')} style={styles.image}/>
              <View style={{justifyContent: "space-between"}}>
                <Text style={{fontSize: 16, fontWeight: "semibold", lineHeight: 20}}>{type}</Text>
                <Text style={{fontSize: 12, lineHeight: 17}}>{size}cm {weight}lb | {location}</Text>
              </View>
            </View>
          )

        })}
      </ScrollView>

      {
        displayForm ?
          <View style={styles.form}>
            <TouchableOpacity onPress={() => {setDisplayForm(false)}} style={styles.shrinkBar}>
              <ChevronDown color={"#fff"} />
            </TouchableOpacity>
            <View style={{padding: 15}}>
              <TextInput style={styles.input} value={newFish.type} placeholder={"Type"} />
              <TextInput style={styles.input} value={newFish.weight} placeholder={"Weight"}/>
              <TextInput style={styles.input} value={newFish.size} placeholder={"Size"} />
              <TextInput style={styles.input} value={newFish.location} placeholder={"Location"} />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Caught Fish</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          <TouchableOpacity onPress={() => {setDisplayForm(true)}} style={styles.expandBar}>
            <ChevronUp style={{position: "absolute", left: 15, top: 30, zIndex: 99}} color={"#fff"}/>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Caught Fish</Text>
            </View>
          </TouchableOpacity>

      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: "100%"
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 8,
    backgroundColor: "grey"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: "grey"
  },
  shrinkBar: {
    backgroundColor: "#E66952",
    padding: 15,
    width: "100%",
    alignItems: "flex-end"
  },
  expandBar: {
    backgroundColor: "#E66952",
    padding: 15,
    width: "100%",
    position: "relative",
  },
  form: {
    width: "100%",
  },
  input: {
    width: "100%",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#A2A2A2",
    padding: 10,
  },
  button: {
    backgroundColor: "#E66952",
    width: "100%",
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E66952",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "semibold"
  }
});
