import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.header}>
      <View style={styles.ListItemView}>
        <Text style={styles.ListItemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    ListItem: {
        padding:15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    ListItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
   },
   ListItemText: {
       fontSize: 18,
   }
});

export default ListItem;
