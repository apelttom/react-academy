import { ScrollView, View, StyleSheet, TouchableHighlight, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box1}>
      </View>
      <View style={styles.box2}>
      </View>
      <View style={styles.playButtonSection}>
        <View style={styles.box3}>
        </View>
        <View style={styles.box4}>
        </View>
        <View style={styles.box5}>
        </View>
        <View style={styles.box6}>
        </View>
        <View style={styles.box7}>
        </View>
        <View style={styles.box8}>
          <TouchableHighlight style={styles.roundButtonPink}>
            <Image 
              style={styles.playImage}
              source={require('./imagePlay.png')}
            />
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'skyblue',
  },
  box1: {
    flex: 1,
    backgroundColor: 'green',
  },
  box2: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  box3: {
    flex: 1,
    backgroundColor: 'violet',
  },
  box4: {
    flex: 1,
    backgroundColor: 'grey',
  },
  box5: {
    flex: 1,
    backgroundColor: 'darkblue',
  },
  box6: {
    flex: 1,
    backgroundColor: 'orange',
  },
  box7: {
    flex: 1,
    backgroundColor: 'steelblue',
  },
  box8: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButtonSection: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  roundButtonPink: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#ff66ff',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  playImage: {
    width: 20,
    height: 20,
  },
});
