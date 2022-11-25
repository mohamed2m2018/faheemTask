import {
  Text,
  ScrollView,
  ActivityIndicator,
  View,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import RadioForm from 'react-native-simple-radio-button';
import {useGetAddresses} from '../../hooks/useGetAddresses';
import {filterationValues} from '../../statics/constants';
import {styles} from './styles';
import CustomTable from '../../components/customTable';

const HomeScreen: React.FC = () => {
  const [filterationOption, setfilterationOption] = useState<string>(
    filterationValues.ALL_OPTION,
  );
  const {tableData, isLoading, refetch, isRefetching} =
    useGetAddresses(filterationOption);

  const filterationOptions = [
    filterationValues.MALE_OPTION,
    filterationValues.FAMALE_OPTION,
    filterationValues.ALL_OPTION,
  ];

  var radio_props = filterationOptions.map((option, index) => ({
    label: `${option}  `,
    value: index,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Address Book</Text>
      <Text style={styles.subTitle}>Hello, Kareem</Text>
      <View style={styles.spacingWrapper}>
        <RadioForm
          radio_props={radio_props}
          initial={2}
          animation
          formHorizontal
          onPress={value => {
            setfilterationOption(filterationOptions[value]);
          }}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }>
        {isLoading ? (
          <View style={styles.spacingWrapper}>
            <ActivityIndicator size={'large'} color={'black'} />
          </View>
        ) : (
          <CustomTable tableData={tableData} />
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
