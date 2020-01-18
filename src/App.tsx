import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {PrimaryButton, SecondaryButton} from './Button';
import { Title, Subtitle, Paragraph } from './Text';

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
              <Title>Hello World</Title>
              <Subtitle>A sample component</Subtitle>
              <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et neque non elit interdum ullamcorper vel ac leo. Etiam lacinia blandit accumsan. Sed dolor mauris, dignissim et venenatis sed, porta vitae dolor. Integer pellentesque elit sed dui blandit lobortis. Mauris lobortis eleifend sollicitudin. Suspendisse eget nulla eros. Aliquam a diam nec nisl suscipit pulvinar eget condimentum sapien. Nulla vel leo orci.
              </Paragraph>
          </View>
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
