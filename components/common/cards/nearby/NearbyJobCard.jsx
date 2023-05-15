import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

import {checkImageURL} from '../../../../utils';

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {handleNavigate}}>
      <TouchableOpacity style={styles.logocontainer}>
        <Image source={{ uri: checkImageUlr(job.employer_logo)
        ? job.employer_logo : 'https:' }} resizeMode="contain" style={styles.logoImage}/>
      </TouchableOpacity>

      

      <View style={styles.textContainer}>
        <text style={styles.jobName} numberOfLines={1}>
          { job.job_title }
        </text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard