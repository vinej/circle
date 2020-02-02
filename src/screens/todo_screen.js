import React, {useEffect, useState} from 'react';
import { observer } from 'mobx-react'
import { StyleSheet, FlatList, View, ImageBackground} from 'react-native';
import { Text, Divider, Icon} from 'react-native-elements'
import { TodoAction as on } from '../actions/todo_actions'
import TodoStore from '../stores/todo_store' 
import TodoItem  from '../components/todo/todo_item'
import TodoEdit from '../components/todo/todo_edit'
import { newTodo} from '../models/todo_model'
import {SafeAreaView} from 'react-navigation'
import { getDate, moveDateByDay } from '../helpers/utilitiy'
import TodoCalendar from '../components/todo/todo_calendar'
import SwipeGesture from '../helpers/swipe-gesture'


const TodoScreen = (props) => {

  // the .slice is needed to refresh the list
  const [isEdit, setIsEdit] = useState(false);
  const [isCalendar, setCalendar] = useState(false);
  
  firstIndex = 0;
  lastIndex = 10;
  newContent = '';

  // call get all once
  useEffect(() => {
    props.navigation.setParams({ 'setIsEdit' : setIsEdit });
    on.getAll();
  }, [])

  onSwipePerformed = (action) => {
    /// action : 'left' for left swipe
    /// action : 'right' for right swipe
    /// action : 'up' for up swipe
    /// action : 'down' for down swipe
    
    switch(action){
      case 'left':{
        TodoStore.selectedDate = moveDateByDay(TodoStore.selectedDate, 1);
        on.getAll();
        console.log('left Swipe performed');
        break;
      }
       case 'right':{
        TodoStore.selectedDate = moveDateByDay(TodoStore.selectedDate, -1);
        on.getAll();
        console.log('right Swipe performed');
        break;
      }
    }
  }

  return (
      <SafeAreaView style= { { flex :1}}>
        <ImageBackground source={ require('../../assets/task.jpg') } style={ styles.backgroundImage} />
        <View style= { { flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={ styles.title} >Task List</Text>
            <Icon
              name='undo'
              type='materialicon'
              size= {30}
              iconStyle= { { color : 'orange'} }
              onPress= { () => on.undo(TodoStore.lastTodo) }
            />
            <Icon
              name='new-message'
              type='entypo'
              size= {30}
              iconStyle= { { color : 'black', marginTop:3} }
              onPress= { () => setIsEdit(true) } 
            />
          </View>
        <View style= { { flexDirection: 'row',  justifyContent:'center'}}>
        <Text style= { styles.date }>{ getDate(TodoStore.selectedDate) }</Text>
          <Icon
            name='calendar'
            type='entypo'
            size= {30}
            iconStyle= { { color : 'black', marginTop:3} }
            onPress= { () => setCalendar(true) } 
          />
          { isCalendar  &&  <TodoCalendar now={getDate(TodoStore.selectedDate)} setCalendarDate={ (date,type) => { 
            var dt = new Date(date); //stringToDate(date, 'yyyy-MM-dd', '-');
            TodoStore.selectedDate = dt.getTime().toString(); 
            on.getAll();
            setCalendar(false) }} /> } 

        </View>

        <View style= { { flexDirection: 'row', justifyContent:'space-between'}}>        
          { isEdit  &&  <TodoEdit todo={newTodo()} setPropIsEdit={ (status) => setIsEdit(status)} isNew={true} /> } 
        </View>
        <Divider style={ { marginTop:3, marginBottom:3}} />
        <View style={ styles.container} >
        <SwipeGesture gestureStyle={styles.swipesGestureContainer} onSwipePerformed={this.onSwipePerformed} >
          <FlatList
            data = { TodoStore.todos.slice() }
            contentContainerStyle={{ paddingBottom: 60}}
            contentInset={{top: 0, bottom: 20, left: 0, right: 0}}
            contentInsetAdjustmentBehavior='automatic'
            maxToRenderPerBatch={10}
            initialNumToRender={10}
            removeClippedSubviews={true}
            windowSize={10}
            keyExtractor = { (todo) => todo.Id.toString()}
            renderItem = { ( { item } )  => (
              <TodoItem todo={item}/>
            )} 
          />
        </SwipeGesture>
        </View>
      </SafeAreaView>
    )
};

const styles = StyleSheet.create({
  root: {
    borderColor: 'gray',
    borderWidth:1,
    position: 'absolute',
    top: 20,
    left:0,
    right:0,
    bottom:0
  },
  main: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize:30,
  },
  index: {
    fontSize:30,
  },
  date: {
    fontSize: 20,
    marginTop:6,
    marginRight:10
  },
  container:{
    height:'100%',
    width:'100%'
  },
  swipesGestureContainer:{
    height:'100%',
    width:'100%'
  },
  backgroundImage:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: '87%',
    right: 0,
    opacity: 0.4
},
});

export default observer(TodoScreen);
