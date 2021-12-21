import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const App = () => {
  const [active_player, setActive_player] = useState('X')
  const [xwin, setxwin] = useState(0)
  const [owin, setowin] = useState(0)
  const [draw, setdraw] = useState(0)
  const [markers, setMarkers] = useState([
    null, null, null,
    null, null, null,
    null, null, null
  ])

  const markPosition = (position) => {
    if(!markers[position]){
      let temp = [...markers]
      temp[position] = active_player
      setMarkers(temp)
      if(active_player === 'X'){  //transfer chances to next player
        setActive_player('O')
      }else{
        setActive_player('X')
      }
    }
  }

  const resetMarkers = () => {
    setMarkers([
      null, null, null,
      null, null, null,
      null, null, null
    ])
  }

  const resetHardMarkers =() => {
    setdraw(0)
    setowin(0)
    setxwin(0)
    resetMarkers()
  }

  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i = 0; i < lines.length; i++){
      // if( squares != null){
      //   if(squares[a] && squares[a] !== squares[b] || squares[a] !== squares[c]){
      //     return "draw";
      //   }
      // }
  
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
      else if (!squares.includes(null)){
        return "draw";
      }
    }
    return null;
  }

  useEffect(() => {
    const winner = calculateWinner(markers);
    if(winner === 'X'){
      alert("Player X Won!")
      setxwin(xwin + 1 )
      resetMarkers()
    }else if(winner === 'O'){
      alert("Player O Won!")
      setowin(owin + 1)
      resetMarkers()
    }
    else if (winner === "draw"){
      alert("Draw")
      setdraw(draw + 1)
      resetMarkers()
    }
  }, [markers])

  return (
    <SafeAreaView style={styles.body}>
      <View style={[styles.playerInfo, { backgroundColor: active_player === 'X' ? '#007FF4' : '#F40075' }]}>
        <Text style={styles.playerTxt}>Player {active_player}'s turn</Text>
      </View>
      <View style={{paddingTop: 20, paddingBottom: -20, flexDirection: "row", justifyContent: "space-around"}}>
        <Image source={require("./assets/img/cross.png")} style={{ height: 30, width: 30,}} />
        <Image source={require("./assets/img/equal.png")} style={{ height: 30, width: 30, }} />
        <Image source={require("./assets/img/zero.png")} style={{ height: 30, width: 30,}} />
      </View>
      <View style={{paddingTop: 10, paddingBottom: -20, flexDirection: "row", justifyContent: "space-around"}}>
        <Text style={{fontSize: 20, color: "#007FF4"}}>{xwin} WINS</Text>
        <Text style={{fontSize: 20, color: "#808080"}}>{draw} DRAWS</Text>
        <Text style={{fontSize: 20, color: "#F40075"}}>{owin} WINS</Text>
      </View>
      <View style={styles.mainContainer}>

        {/* Top Left Cell */}
        <Pressable style={styles.cell_top_left} onPress={()=>markPosition(0)}>
          {markers[0] === 'X' && <Image source={require('./assets/img/cross.png')} style={styles.icon} />}
          {markers[0] === 'O' && <Image source={require('./assets/img/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Top Mid Cell */}
        <Pressable style={styles.cell_top_mid} onPress={()=>markPosition(1)}>
          {markers[1] === 'X' && <Image source={require('./assets/img/cross.png')} style={styles.icon} />}
          {markers[1] === 'O' && <Image source={require('./assets/img/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Top Right Cell */}
        <Pressable style={styles.cell_top_right} onPress={()=>markPosition(2)}>
          {markers[2] === 'X' && <Image source={require('./assets/img/cross.png')} style={styles.icon} />}
          {markers[2] === 'O' && <Image source={require('./assets/img/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Mid Left Cell */}
        <Pressable style={styles.cell_mid_left} onPress={()=>markPosition(3)}>
          {markers[3] === 'X' && <Image source={require('./assets/img/cross.png')} style={styles.icon} />}
          {markers[3] === 'O' && <Image source={require('./assets/img/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Mid Mid Cell */}
        <Pressable style={styles.cell_mid_mid} onPress={()=>markPosition(4)}>
          {markers[4] === 'X' && <Image source={require('./assets/img/cross.png')} style={styles.icon} />}
          {markers[4] === 'O' && <Image source={require('./assets/img/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Mid Right Cell */}
        <Pressable style={styles.cell_mid_right} onPress={()=>markPosition(5)}>
          {markers[5] === 'X' && <Image source={require('./assets/img/cross.png')} style={styles.icon} />}
          {markers[5] === 'O' && <Image source={require('./assets/img/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Bottom Left Cell */}
        <Pressable style={styles.cell_bottom_left} onPress={()=>markPosition(6)}>
          {markers[6] === 'X' && <Image source={require('./assets/img/cross.png')} style={styles.icon} />}
          {markers[6] === 'O' && <Image source={require('./assets/img/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Bottom Mid Cell */}
        <Pressable style={styles.cell_bottom_mid} onPress={()=>markPosition(7)}>
          {markers[7] === 'X' && <Image source={require('./assets/img/cross.png')} style={styles.icon} />}
          {markers[7] === 'O' && <Image source={require('./assets/img/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Bottom Right Cell */}
        <Pressable style={styles.cell_bottom_right} onPress={()=>markPosition(8)}>
          {markers[8] === 'X' && <Image source={require('./assets/img/cross.png')} style={styles.icon} />}
          {markers[8] === 'O' && <Image source={require('./assets/img/zero.png')} style={styles.icon} />}
        </Pressable>
      </View>
      <Pressable style={styles.cancleBTN} onPress={resetHardMarkers}>
        <Image source={require('./assets/img/replay.png')} style={styles.cancelIcon}/>
      </Pressable>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#1F1B24'
  },
  playerInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
    marginTop: 30
  },
  playerTxt: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: '#fff'
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 30
  },
  cell_top_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#808080",
    borderRightWidth: 6,
    borderBottomWidth: 6
  },
  cell_top_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#808080",
    borderBottomWidth: 6
  },
  cell_top_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6,
    borderColor: "#808080",
    borderLeftWidth: 6,
  },
  cell_mid_left: {
    width: windowWidth / 3.2,
    borderColor: "#808080",
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
  },
  cell_mid_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    borderColor: "#808080",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell_mid_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    borderColor: "#808080",
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
  },
  cell_bottom_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    borderColor: "#808080",
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
    borderTopWidth: 6,
  },
  cell_bottom_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#808080",
    borderTopWidth: 6,
  },
  cell_bottom_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
    borderColor: "#808080",
    borderTopWidth: 6,
  },
  icon: {
    height: 62,
    width: 62
  },
  cancleBTN: {
    position: 'absolute',
    bottom: 20,
    borderColor: "#121212",
    borderWidth: 1,
    borderRadius: 100,
    right: 20
  },
  cancelIcon: {
    height: 80,
    width: 80
  }
})