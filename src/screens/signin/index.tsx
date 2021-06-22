import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native'

import { ButtonIcon } from '../../components/Buttonicon'
import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles';

export function SignIn() {
  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}
          e organize suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Conecte-se {`\n`}
          e organize suas {`\n`}
          jogatinas
        </Text>

        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}
