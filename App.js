import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, Alert, Modal, Button, TextInput, ActivityIndicator, ImageBackground } from 'react-native';

const Article  = ({textArticel,headerArticel}) =>{

  return (
  <View style={styles.articles}>
    <Text style = {{fontSize: 15, fontWeight: "bold"}}>{headerArticel}</Text>
    <Text>{textArticel}</Text>
  </View>
  );
}



export default function App() {

  const [name, setName] = useState ("guest");

  const [inputValue, setInputValue] = useState('');

  const [modalVisable, setModalVisable] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const [profilIcon, setProfilIcon] = useState(require('./assets/icon.png'))

  const [visibleView, setVisibleView] = useState(false)


  const createAlert = () => {
    Alert.alert(
      "Unable to load",
      "There is an error. Please try again.",
       [{
        text:"Ok",
        onPress:()=> setIsLoading(false),
        }],
    );
    setIsLoading(!isLoading) 
  }

  return (
    <View style={styles.container}>
    <SafeAreaView>
    <View style={styles.headerView}>
     <Text style={{marginTop: 20, color: "white",  fontSize:20, fontWeight: "bold"}}>Welcome {name}</Text> 
    {/*  <View style={{ margin:5, height:60, width:60, backgroundColor:'white'}}> */}
      <TouchableOpacity onPress={() => setModalVisable(true)}>
       <>
       <ImageBackground 
        style={{height:70, width:70, }} 
        imageStyle={{borderRadius:35}}
        source = {profilIcon}>
        {visibleView &&
          <View style={{height:18, backgroundColor:'white', alignItems:'center', marginTop: 40}}>
            <Text> {name} </Text>
          </View>}
        </ImageBackground>

      <Image />
      </>
     {/* </View> */}
     </TouchableOpacity>
     </View>

   
    <Modal 
     transparent 
      visible={modalVisable}>
      <View style={{alignItems:'center'}}> 
        <View style={styles.modalStyle}>
          <TouchableOpacity onPress={() => setModalVisable(!modalVisable) }> 
            <View style={{alignContent:'flex-start'}}>
            <Image source={require('./assets/close.png')}/>
            </View>  
          </TouchableOpacity>

          <Text>Name:</Text>
          <TextInput
          style={{borderWidth:1, width:150, margin:10, padding:8, }}
          placeholder='Enter name'
          value={inputValue}
          onChangeText={(value)=> setInputValue(value)} />
        
          <Button
          title='Submit'
          onPress={() => {
          inputValue == ""? setName("guest") : setName(inputValue) 
          inputValue == ""? setProfilIcon(require('./assets/icon.png')) : setProfilIcon(require('./assets/profile.png'))
          inputValue == ""? setVisibleView(false) : setVisibleView(true)
          }} 
          />
        </View>
      </View>
    </Modal>

    <Text style={{fontSize:20, margin: 10, fontWeight: "bold", }}>Todays Hilights</Text>
     <ScrollView> 
      
     <Article headerArticel={"First Article"} textArticel={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
     />
      
     <Article headerArticel={"Second Article"}textArticel={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
     />
     <Article headerArticel={"Third Article"}textArticel={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
     />
     <Article headerArticel={"Third Article"}textArticel={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
      />
      <View style = {{flexDirection:'row', justifyContent: 'center'}}>
      <Button
      title= {isLoading? "Loading" : "Load More"}
      onPress= {createAlert} 
      />
      <ActivityIndicator 
      animating={isLoading? true: false}
      color='purple'
      />
      </View>
      </ScrollView>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
   
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 1000,

  },
  headerView: {
    height: 90,
    width: 390,
    backgroundColor: "purple",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
   
  },
  articles:{
  margin: 10,
  backgroundColor: "#fff494",  
  },

  modalStyle:{
  justifyContent:'center',  
  marginTop:300, 
  alignItems:'center',
  height:'30%', 
  width:'60%', 
  backgroundColor: 'white'
  }


});
