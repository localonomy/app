// @flow

import React, { Component } from 'react'
import {
  Alert,
  Picker,
  Text,
  TextInput,
  View,
} from 'react-native'

import Tabs from 'react-native-tabs'

import store from './../../store'

import Title from './../../components/Title'

import styles from './styles'

const CountryPicker = ({ countries, onValueChange }) => (
  <Picker
    style={{width: 500}}
    onValueChange={onValueChange}>
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
  static navigationOptions = {
    title: 'Localonomy',
  }

  constructor(props) {
    super(props)

    this.onCountrySelect = this.onCountrySelect.bind(this)

    this.state = {
      countries: [],
      filters: [],
      filtersDisabled: [],
      tab: 'country',
    }
  }

  async componentDidMount() {
    let countries = await store.get('countries')
    let filters = await store.get('filters')
    let filtersDisabled = await store.get('filters-disabled')

    this.setState((prev) => ({
      ...prev,
      countries,
      filters,
      filtersDisabled,
    }))
  }

  onCountrySelect(code) {
    const { navigate } = this.props.navigation
    const { countries } = this.state

    navigate('DishList', {
      country: countries.find((country) => country.code === code)
    })
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
          <CountryPicker
            countries={this.state.countries}
            onValueChange={this.onCountrySelect}
          /> : 
          <DishTextInput />
        }

        {this.state.filters.map((filter) => {
          return (
            <Text
              key={filter}
              onPress={async () => {
                let { filtersDisabled } = this.state

                if (filtersDisabled.includes(filter)) {
                  filtersDisabled.splice(
                    filtersDisabled.findIndex((f) => f === filter), 1
                  )
                } else {
                  filtersDisabled.push(filter)
                }

                await store.set('filters-disabled', filtersDisabled)

                this.setState((prev) => ({
                  ...prev,
                  filtersDisabled,
                }))
              }}
              >
              {filter}
              {(this.state.filtersDisabled.includes(filter)) ? ' - disabled' : ''}
            </Text>
          )
        })}
      </View>
    )
  }
}
