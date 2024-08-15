import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';


interface Props extends StackScreenProps<RootStackParams,'Details'>{}

export const DetailsScreen = ({route}: Props) => {

  //const { movieId } = useRoute().params;
  const { movieId } = route.params;

  //console.log({movieId});
  const {} = useMovie(movieId);

  return (
    <View>
   {/*Header */}

   {/*Details */}
    </View>
  );
};
