import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const MenuScreen = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/coffees')
      .then(response => response.json())
      .then(data => setCoffees(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <FlatList
        data={coffees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default MenuScreen;
