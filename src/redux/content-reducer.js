const ADD_IMAGES = 'ADD_IMAGES'
const TOOGLE_IS_OPEN = 'TOOGLE_IS_OPEN'

const initialState = {
  urls: [],
  isOpen: false
}

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGES: {
      return {...state, urls: action.imagesUrl}
    }
    case TOOGLE_IS_OPEN: {
      return {...state, isOpen: action.isOpen}
    } 
    default:
      return state
  }
}

export const setImages = (imagesUrl) => ({type: ADD_IMAGES, imagesUrl})
export const toogleIsOpen = (isOpen) => ({type: TOOGLE_IS_OPEN, isOpen})

export default contentReducer

