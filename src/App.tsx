import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {PrimaryButton, SecondaryButton, DisabledButton} from './Button';
import {Title, Subtitle, Paragraph} from './Text';
import {DefaultInput} from './Input';

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

  const [isEnabled, setEnabled] = useState(true);
  const [text, setText] = useState<string>('');

  useEffect(() => {
    if (text.length >= 3) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, [text, setEnabled]);

  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView>
          <View style={style.fullWidth}>
            <Title>Hello World</Title>
            <Subtitle>A sample component</Subtitle>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
              neque non elit interdum ullamcorper vel ac leo. Etiam lacinia
              blandit accumsan. Sed dolor mauris, dignissim et venenatis sed,
              porta vitae dolor. Integer pellentesque elit sed dui blandit
              lobortis. Mauris lobortis eleifend sollicitudin. Suspendisse eget
              nulla eros. Aliquam a diam nec nisl suscipit pulvinar eget
              condimentum sapien. Nulla vel leo orci.
            </Paragraph>
          </View>
          <View style={style.fullWidth}>
            <DefaultInput
              placeholder={'Full name'}
              value={text}
              onChangeText={setText}
            />
          </View>
          <View style={style.fullWidth}>
            {isEnabled ? (
              <SecondaryButton onPress={() => setText('')}>
                Clear
              </SecondaryButton>
            ) : (
              <DisabledButton>Clear</DisabledButton>
            )}
          </View>
          <View style={style.fullWidth}>
            <PrimaryButton onPress={() => console.log('onPress')}>
              Save Text
            </PrimaryButton>
          </View>
          <View style={style.halfWidth}>
            <PrimaryButton>Save Text</PrimaryButton>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
