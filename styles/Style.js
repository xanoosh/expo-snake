import { StyleSheet } from 'react-native';

const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    flexBasis: '5%',
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
    flexBasis: '5%',
    aspectRatio: 1,
    backgroundColor: '#ddd',
    borderColor: '#efefef',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { mainStyle, BoardStyle, CellStyle };
