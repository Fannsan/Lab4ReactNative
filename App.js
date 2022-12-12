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
      
     <Article headerArticel={"First Article"} textArticel={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}
     />
      
     <Article headerArticel={"Second Article"}textArticel={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}
     />
     <Article headerArticel={"Third Article"}textArticel={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}
     />
     <Article headerArticel={"Third Article"}textArticel={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}
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
