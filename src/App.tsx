import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {PrimaryButton, SecondaryButton} from './Button';

const App: React.FC = (): React.ReactElement => {
  const style = StyleSheet.create({
    fullWidth: {
      width: '100%',
      marginTop: 32,
      paddingHorizontal: 24,
    },
    halfWidth: {
      width: '50%',
      marginTop: 32,
      paddingHorizontal: 24,
    },
  });

  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView>
          <View style={style.fullWidth}>
            <SecondaryButton>Remover</SecondaryButton>
          </View>
          <View style={style.fullWidth}>
            <PrimaryButton onPress={() => console.log('onPress')}>
              Geral
            </PrimaryButton>
          </View>
          <View style={style.halfWidth}>
            <PrimaryButton>Individual</PrimaryButton>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
