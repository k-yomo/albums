import React from 'react';
import { View, Text }  from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Text>{props.children}</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5
  }
};

export default Card;
