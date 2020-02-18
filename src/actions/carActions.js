export const addFeature = (feature) => {
    return {type: 'ADD_FEATURE', payload: feature}
}

export const reamoveFeature = (feature) => {
    return {type: 'REMOVE_FEATURE', payload: feature}
}