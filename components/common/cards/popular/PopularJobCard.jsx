import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

import {checkImageURL} from '../../../../utils';

const PopularJobCard = () => {
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)} onPress={() => {handleCardPeess(item)}}>
      <TouchableOpacity style={styles.logocontainer(selectedJob,item)}>
        <Image source={{ uri: checkImageUlr(item.employer_logo)
        ? item.employer_logo : 'https:' }} resizeMode="contain" style={styles.logoImage}/>
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1}>{ item.employer_name }</Text>

      <View style={styles.infoContainer}>
        <text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          { item.job_title }
        </text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard