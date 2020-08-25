import React from "react";
import { Text, View, Image} from 'react-native'
import styles from './style';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CartItem = (props) => (
    <View　style={styles.listItem}>
    <View style={styles.CardItem}>
      <Image resizeMode={"cover"} style={styles.ImageCart}  source={props.img}/>
      <View style={styles.ContainerRight}>
        <View>
          <Text style={styles.TextTitle}>{props.name}</Text>
          <View style={styles.ItemRow}>
            <EvilIcons
                name='location'
                size={18}
                style={{ marginRight: 5 , color: '#D1C9C7'}}
              />
            <Text style={[styles.textTab,{color: '#D1C9C7'}]}>856 Esta Underpass</Text>
          </View>
        </View>
        <View style={styles.ContainerItem}>
          <View style={styles.ItemRow}>
              <AntDesign
                  name='star'
                  size={18}
                  style={{ marginRight: 5 , color: '#E3E60C'}}
                />
              <Text style={styles.textTab}>{props.rating} </Text>
              <Text style={[styles.textTab,{color: '#D1C9C7'}]}>(233 rattings)</Text>
          </View>
          {
            props.delivery == null ? null:
            <View style={styles.ContainerDelivery}>
                <Text style={{color:"#fff"}}>{props.delivery}</Text>
            </View>
          }

        </View>
        
      </View>
  </View>
</View>
)


export default CartItem;
