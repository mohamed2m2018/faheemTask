import {Text, Image} from 'react-native';
import React from 'react';
import {Row, Table} from 'react-native-table-component';
import {tableHeaders} from '../../statics/constants';
import {RowData} from '../../types/formattedDataTypes';
import styles from '../customTable/styles';

interface Props {
  tableData?: RowData[];
}

const renderRow = (row: RowData) =>
  row?.map(({value, type}) => {
    switch (type) {
      case 'image':
        return <Image key={value} style={styles.image} source={{uri: value}} />;

      default:
        return (
          <Text key={value} style={styles.text}>
            {value}
          </Text>
        );
    }
  });

const CustomTable = ({tableData}: Props) => {
  return (
    <Table style={styles.table} borderStyle={styles.tableBorder}>
      <Row
        data={[
          tableHeaders.FIRST_HEADER,
          tableHeaders.SECOND_HEADER,
          tableHeaders.THIRD_HEADER,
        ]}
        style={styles.head}
        textStyle={styles.text}
        flexArr={[1, 1, 2]}
      />
      {tableData?.map?.((row: RowData, index: number) => (
        <Row
          textStyle={styles.text}
          key={index}
          data={renderRow(row)}
          flexArr={[1, 1, 2]}
        />
      ))}
    </Table>
  );
};

export default CustomTable;
