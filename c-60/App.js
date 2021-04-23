import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import db from './config';

export default class App extends Component {
constructor(){
  super();
  this.state={
    teamsRank:[],
  };
}
 componentDidMount(){
   this.showTeamsRanks();

 }
showTeamsRanks=()=>{
  var teams=[];
  var teamRef=db.ref('teams/');
  teamRef.on("value",(data)=>{
  var teamList= data.val();
  console.log(teamList);
   //console.log(teams[1]+'ruby');
  for( var i in teamList){
   
       console.log(teamList[i]+ 'Bhavesh');
    if(teamList[i]['isButtonPressed']===true){
      teamList[i]['teamName']=i;
      teams.push(teamList[i]);
  
         }
    }
   // console.log(teams+'ruby'); 

      teams.sort(function(team1,team2){
        return team1.timestamp-team2.timestamp
      });
      this.setState({
        teamsRank:teams,
      });
       teams = [];
  })
  
}

 resetDb =() => {
   var lucky=db.ref('teams/').set({
     blue: {
     isButtonPressed:false,
     timestamp:0,
     enabled:true
     },
      red: {
     isButtonPressed:false,
     timestamp:0,
     enabled:true
     },
     green: {
     isButtonPressed:false,
     timestamp:0,
     enabled:true
     },
      yellow: {
     isButtonPressed:false,
     timestamp:0,
     enabled:true
     }
   });

   this.setState({teamsRank:[]});
 }

  render() {
    return (
      <View style={{flex:1}}>
         <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
             }}>
            {this.state.teamsRank.map((i)=>(
             <View
                style ={{
                   width: 140,
                   height:55,
                   borderWidth:2,
                   margin:5,
                   justifyContent:'center',
                   alignItems:'center',
                   backgroundColor: i.teamName
                     }}>
                  <Text>{i.teamName.toUpperCase()}</Text>
               </View>
            ))}
        </View>
             <Button title="reset" 
             style={{width:100,height:100}}
             onPress={this.resetDb}
        />
      </View>

    );
  }
}
