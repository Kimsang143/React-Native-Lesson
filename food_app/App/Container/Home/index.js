import React, {useState} from 'react'
import { Text, View, FlatList, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native'

import { listTab, data } from '@staticData';
import { CardItem } from '@components';
import styles from './style';

const Home = () => {
  const [status, setStatus] = useState('Places')
  const [datalist, setDatalist] = useState(data)

  const setStatusFilter = status => {
    //alert(status)
    if (status !== 'Places'){
        setDatalist([...data.filter( e => e.status === status)])
    }else{
        setDatalist(data)
    }
    setStatus(status)
  }

  const renderItem = ({item}) => {
    return(
       <CardItem name={item.name} 
       img={item.image} 
       delivery={item.delivery} 
       rating= {item.rate} />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor='#fff' barStyle="dark-content" />
    <View style={styles.header}>
        <Text style={styles.textHeader}>My Favourite</Text>
    </View>
      <View style={styles.listTab}>
      {
        listTab.map((item, index) => (
          <TouchableOpacity key={index.toString()} style={[styles.btnTab, status === item.status && styles.btnTabctive]}
            onPress= {() => setStatusFilter(item.status)}>
          <Text style={[styles.textTab, status === item.status && styles.textTabative]}>{item.status}</Text>
        </TouchableOpacity>
        ))
      }
      </View>
   
      <View style={{backgroundColor: '#F7F3F2', flex: 1}}>
        <FlatList 
          data={datalist}
          keyExtractor= {(e, i) => i.toString()}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home


