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
//Reducer functions take in multiple pieces of data and return a single resulting value
//the reducer pattern when it comes to the reducer hooks or redux will take in two objects. current state and action object then reduces them down to a single object that will be new state and returns that new object
  export const carReducer = (state = initialState, action) => {
    //carReducer starts with initial state then in the case of ADD_FEATURE I want to return state and additional price, also will return the state of the car with features and additional features added
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
      //in the case of REMOVE_FEATURE I will return the state with the addition price subtracted then will also remove the features and additional features
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