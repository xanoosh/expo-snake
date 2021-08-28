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
  buttonUp: {
    position: 'absolute',
    top: 0,
    left: '40%',
    width: '20%',
    backgroundColor: '#631c03',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
  },
  buttonDown: {
    position: 'absolute',
    bottom: 0,
    left: '40%',
    width: '20%',
    backgroundColor: '#631c03',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
  },
  buttonLeft: {
    position: 'absolute',
    top: 25,
    left: '10%',
    width: '20%',
    backgroundColor: '#631c03',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
  },
  buttonRight: {
    position: 'absolute',
    top: 25,
    right: '10%',
    width: '20%',
    backgroundColor: '#631c03',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
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
    borderColor: '#ddd',
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
    backgroundColor: '#631c03',
    borderColor: '#efefef',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { mainStyle, BoardStyle, CellStyle };
