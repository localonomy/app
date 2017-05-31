// @flow

import React, { Component } from 'react'
import {
  Alert,
  Picker,
  TextInput,
  View,
} from 'react-native'

import Tabs from 'react-native-tabs'

import store from './../../store'

import Text from './../../components/Text'
import Title from './../../components/Title'

import styles from './styles'

const CountryPicker = ({ countries }) => (
  <Picker
    style={{width: 500}}
    onValueChange={(country) => Alert.alert(
      'Selected Country',
      country
    )}>
    <Picker.Item label='Please select a country' value='' />
    {countries.map((country) => {
      return (
        <Picker.Item
          key={country.id}
          label={country.name}
          value={country.code}
        />
      )
    })}
  </Picker>
)

const DishTextInput= () => (
  <TextInput
    style={{height: 60}}
    placeholder='Please type a dish name'
    returnKeyType='go'
  />
)

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countries: [],
      filters: [],
      tab: 'country',
    }
  }

  async componentDidMount() {
    let countries = await store.get('countries')
    let filters = await store.get('filters')

    this.setState((prev) => ({
      ...prev,
      countries,
      filters,
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Title>Discover Local Delicacies!</Title>
        <Tabs
          selected={this.state.tab}
          onSelect={(el) => {
            this.setState((prev) => ({ ...prev, tab: el.props.name })) 
          }}
        >
          <Text name='country'>By Country</Text>
          <Text name='dish'>By Dish Name</Text>
        </Tabs>
        {(this.state.tab === 'country') ?
          <CountryPicker countries={this.state.countries} /> : 
          <DishTextInput />
        }

        {this.state.filters.map((filter) => {
          return (
            <Text key={filter}>
              {filter}
            </Text>
          )
        })}
      </View>
    )
  }
}
