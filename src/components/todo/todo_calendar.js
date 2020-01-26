import React, { useState } from 'react';
import { observer } from 'mobx-react'
import { Modal, StyleSheet} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { Text, Divider , Icon} from 'react-native-elements'
import {SafeAreaView} from 'react-navigation'

const TodoCalendar = ( { setCalendarDate }) => {
  const minDate = new Date(2018, 1, 1); // Min date
  const maxDate = new Date(2050, 6, 3); // Max date

  return ( 
    <Modal>
      <SafeAreaView forceInset={ { top: 'always'} }>
      <Divider style={{ marginTop:10 }}/>
      <Text style={ styles.text }>Choisir la date courante</Text>
      <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
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
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="#66ff33"
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            fontFamily: 'Cochin',
            color: '#000000',
          }}
          onDateChange={setCalendarDate}
        />    
        </SafeAreaView>
    </Modal>
  )
};

const styles = StyleSheet.create({
 text: {
      fontSize:25,
      textAlign: 'center'
  }
});
 
export default observer(TodoCalendar); 
