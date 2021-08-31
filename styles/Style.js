import { StyleSheet } from 'react-native';

const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPlayPause: {
    position: 'absolute',
    bottom: 30,
    width: '15%',
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
  },
  buttonPlayPauseText: {
    textAlign: 'center',
  },
});

const NavButtonsStyle = StyleSheet.create({
  buttonGroup: {
    position: 'relative',
    width: '100%',
    height: 130,
    marginTop: 30,
    // leaving commented border for visual context later
    // borderStyle: 'solid',
    // borderColor: '#eee',
    // borderWidth: 1,
  },
  button: {
    position: 'absolute',
    width: '15%',
    // backgroundColor: '#06bcee',
    borderStyle: 'solid',
    borderColor: '#06bcee',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
    aspectRatio: 1,
  },
  buttonUp: {
    top: 0,
    left: '42.5%',
  },
  buttonDown: {
    bottom: 0,
    left: '42.5%',
  },
  buttonLeft: {
    top: '27.5%',
    left: '22%',
  },
  buttonRight: {
    top: '27.5%',
    right: '22%',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
  },
  arrowUp: {
    width: 0,
    borderWidth: 20,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#06bcee',
    position: 'absolute',
    top: '-10%',
    left: '22%',
  },
  arrowDown: {
    borderWidth: 20,
    borderTopColor: '#06bcee',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    position: 'absolute',
    top: '35%',
    left: '22%',
  },
  arrowRight: {
    borderWidth: 20,
    borderTopColor: 'transparent',
    borderLeftColor: '#06bcee',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    position: 'absolute',
    top: '12%',
    left: '60%',
  },
  arrowLeft: {
    borderWidth: 20,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: '#06bcee',
    borderBottomColor: 'transparent',
    position: 'absolute',
    top: '12%',
    right: '60%',
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
  food: {
    aspectRatio: 1,
    backgroundColor: 'red',
    borderColor: 'red',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { mainStyle, BoardStyle, CellStyle, NavButtonsStyle };
