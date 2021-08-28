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
    height: 80,
    marginTop: 30,
    // leaving commented border for visual context later
    // borderStyle: 'solid',
    // borderColor: '#eee',
    // borderWidth: 1,
  },
  button: {
    position: 'absolute',
    width: '20%',
    backgroundColor: '#06bcee',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
  },
  buttonUp: {
    top: 0,
    left: '40%',
  },
  buttonDown: {
    bottom: 0,
    left: '40%',
  },
  buttonLeft: {
    top: 25,
    left: '10%',
  },
  buttonRight: {
    top: 25,
    right: '10%',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
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
