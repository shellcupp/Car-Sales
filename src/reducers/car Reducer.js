// add initial state from App.js
const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };
//   Set up the Redux flow
//   User should be able to add features to their car
//   User should be able to remove added features from their car
//   Total should update as user adds and removes features from their car
//Reducer function with take in multiple pieces of data and return a single resulting value
//the reducer pattern when it comes to the reducer hooks or redux will take in two objects. current state and action object reduces them down to a single object that will be updated state. 
  export const carReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FEATURE':
        console.log('added item', action.payload)
      return {
        ...state,
        additionalPrice: state.car.features.includes(action.payload) ? (state.additionalPrice) : (state.additionalPrice + action.payload.price),
        car: {
          ...state.car,
          features: state.car.features.includes(action.payload) ? [...state.car.features] : [...state.car.features, action.payload]
        },
        additionalFeatures: (state.additionalFeatures.filter(feature => {
          return feature !== action.payload
        }))
      };
      case 'REMOVE_FEATURE':
        return {
          ...state,
          additionalPrice: state.additionalPrice - action.payload.price,
          car: {
            ...state.car,
            features: (state.car.features.filter(feature => {
              return feature !== action.payload
            }))
          },
          additionalFeatures: state.additionalFeatures.includes(action.payload) ? [...state.additionalFeatures] : [...state.additionalFeatures, action.payload]
        }
      default:
        return state;
    }
  }