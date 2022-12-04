import {
  Text,
  ScrollView,
  ActivityIndicator,
  View,
  RefreshControl,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RadioForm from 'react-native-simple-radio-button';
import {useGetAddresses} from '../../hooks/useGetAddresses';
import {filterationValues, sortingValues} from '../../statics/constants';
import {styles} from './styles';
import CustomTable from '../../components/customTable';

const HomeScreen: React.FC = () => {
  const [filterationOption, setfilterationOption] = useState<string>(
    filterationValues.ALL_OPTION,
  );
  const [sortingState, setSortingState] = useState(sortingValues.ASC);
  const {tableData, isLoading, refetch, isRefetching} =
    useGetAddresses(filterationOption);

  const [sortedData, setSortedData] = useState(tableData);

  const filterationOptions = [
    filterationValues.MALE_OPTION,
    filterationValues.FAMALE_OPTION,
    filterationValues.ALL_OPTION,
  ];

  useEffect(() => {
    const sorted = tableData?.sort((firstItem, secondItem) => {
      if (sortingState === sortingValues.ASC) {
        return firstItem[2].value - secondItem[2].value;
      } else {
        return secondItem[2].value - firstItem[2].value;
      }
    });
    setSortedData(sorted);
  }, [sortingState]);

  var radio_props = filterationOptions.map((option, index) => ({
    label: `${option}  `,
    value: index,
  }));

  const handleSwitchSorting = () => {
    if (sortingState === sortingValues.ASC) {
      setSortingState(sortingValues.Desc);
    } else {
      setSortingState(sortingValues.ASC);
    }
  };

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
        <Text>The data is sorted {sortingState}</Text>
        <Button onPress={handleSwitchSorting} title="Switch Sorting" />
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
          <CustomTable tableData={sortedData || tableData} />
        )}
      </ScrollView>
    </View>
  );
};

export default React.memo(HomeScreen);
