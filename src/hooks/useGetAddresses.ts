import {ENDPOINT, mediaTypes} from '../statics/constants';
import {IAxiosData, IError, IResult} from './../types/ApiDataTypes';
import axios from 'axios';
import {useQuery} from 'react-query';
import {filterationValues} from '../statics/constants';
import {Alert} from 'react-native';

export const useGetAddresses = (filterationOption: string) => {
  const queryNotFiltered = filterationOption === filterationValues.ALL_OPTION;

  const {
    data: tableData,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery(
    'addresses',
    () =>
      axios.get(ENDPOINT, {
        params: {
          results: 10,
        },
      }),
    {
      onError: (err: IError) => Alert.alert(err?.message),
      select: (response: IAxiosData) => {
        const results = response.data.results;
        const data: IResult[] = queryNotFiltered
          ? results
          : results?.filter?.(
              item => item.gender === filterationOption?.toLocaleLowerCase(),
            );

        const formattedData = data?.map(item => [
          {value: item.picture.thumbnail, type: mediaTypes.IMAGE},
          {
            value:
              item.name.title + ' ' + item.name.first + ' ' + item.name.last,
            type: mediaTypes.TEXT,
          },
          {value: item.email, type: mediaTypes.TEXT},
        ]);
        return formattedData;
      },
    },
  );

  return {
    tableData,
    isLoading,
    refetch,
    isRefetching,
  };
};
