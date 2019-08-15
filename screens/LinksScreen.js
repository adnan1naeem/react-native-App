import { Button, ScrollView, StyleSheet } from 'react-native';

import { ExpoLinksView } from '@expo/samples';
import React from 'react';

export default function LinksScreen(props) {
  console.log('props', props.navigation);
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <ExpoLinksView />
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
  headerRight: (
    <Button
      onPress={() => alert('This is a button!')}
      title="cvcf"
      color="green"
    />
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
