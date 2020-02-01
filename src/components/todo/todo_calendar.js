import React, { useState } from 'react';
import { observer } from 'mobx-react'
import { Modal, View, StyleSheet} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { Text, Divider , Icon} from 'react-native-elements'
import {SafeAreaView} from 'react-navigation'

const TodoCalendar = ( { now, setCalendarDate }) => {
  const minDate = new Date(2018, 1, 1); // Min date
  const maxDate = new Date(2050, 6, 3); // Max date

  return ( 
    <Modal>
      <SafeAreaView forceInset={ { top: 'always'} }>
      <Divider style={{ marginTop:10 }}/>
      <Text style={ styles.text }>Choisir la date courante</Text>
      <CalendarPicker
          enableSwipe={true}
          onSwipe={ (direction) => {
              console.log(direction)
          }}
          startFromMonday={true}
          enableDateChange={true}
          allowRangeSelection={true}
          initialDate={now}
          minDate={minDate}
          maxDate={maxDate}
          weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
          months={[
            'January',
            'Febraury',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
          previousTitle="Previous"
          nextTitle="Next"
          todayTextStyle= { {color: 'black', fontSize:20 }}
          todayTextStyle= { {color: 'red', fontSize:20 }}
          scaleFactor={375}
          selectedStartDate= {now}
          selectedEndDate= {now }
          textStyle={{
            fontFamily: 'Cochin',
            color: '#000000',
          }}
          onDateChange={setCalendarDate}
        />    
        <View style={ styles.row}>
        <Icon
            name='cancel'
            type='materialicon'
            size= {50}
            onPress= { () => setCalendarDate(now,'') }
            iconStyle= { {color :'green'} }
          />
          </View>
        </SafeAreaView>
    </Modal>
  )
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    minHeight: 40,
    justifyContent: 'space-around'
    
  },
 text: {
      fontSize:25,
      textAlign: 'center'
  }
});
 
export default observer(TodoCalendar); 
