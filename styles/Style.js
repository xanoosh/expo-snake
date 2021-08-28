import { StyleSheet } from 'react-native';

const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGroup: {
    position: 'relative',
    width: '100%',
    height: 100,
    marginTop: 30,
    // leaving commented border for visual context later
    // borderStyle: 'solid',
    // borderColor: '#eee',
    // borderWidth: 1,
  },
  button: {
    position: 'absolute',
    width: '10%',
    backgroundColor: '#06bcee',
    paddingLeft: 10,
    paddingRight: 10,
    aspectRatio: 1,
  },
  buttonUp: {
    top: 0,
    left: '45%',
  },
  buttonDown: {
    bottom: 0,
    left: '45%',
  },
  buttonLeft: {
    top: 25,
    left: '30%',
  },
  buttonRight: {
    top: 25,
    right: '30%',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
  },
  arrowUp: {
    borderWidth: 10,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',
    position: 'absolute',
    top: '10%',
    left: '50%',
  },
  arrowDown: {
    borderWidth: 10,
    borderTopColor: '#fff',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    position: 'absolute',
    top: '40%',
    left: '50%',
  },
  arrowRight: {
    borderWidth: 10,
    borderTopColor: 'transparent',
    borderLeftColor: '#fff',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    position: 'absolute',
    top: '25%',
    left: '90%',
  },
  arrowLeft: {
    borderWidth: 10,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: '#fff',
    borderBottomColor: 'transparent',
    position: 'absolute',
    top: '25%',
    left: '10%',
  },
  buttonPlayPause: {
    width: '15%',
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
  },
  buttonPlayPauseText: {
    textAlign: 'center',
  },
});

const BoardStyle = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#efefef',
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
});

const CellStyle = StyleSheet.create({
  cell: {
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderColor: '#efefef',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellActive: {
    // flexBasis: '5%',
    aspectRatio: 1,
    backgroundColor: '#06bcee',
    borderColor: '#efefef',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { mainStyle, BoardStyle, CellStyle };
