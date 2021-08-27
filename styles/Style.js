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
    borderColor: 'red',
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
});

const CellStyle = StyleSheet.create({
  cell: {
    flexBasis: '10%',
    height: '10%',
    backgroundColor: '#fff',
    borderColor: 'red',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { mainStyle, BoardStyle, CellStyle };
