const ADD_IMAGES = 'content/ADD_IMAGES'
const TOGGLE_IS_OPEN = 'content/TOGGLE_IS_OPEN'
const SET_BIG_IMAGE_URL = 'content/SET_BIG_IMAGE_URL'
const ADD_COMMENT = 'content/ADD_COMMENT'

const initialState = {
  urls: [],
  bigImageUrl: '',
  isOpen: false,
  commentsData: [
  ]
}

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGES: {
      return {...state, urls: action.imagesUrl}
    }
    case TOGGLE_IS_OPEN: {
      return {...state, isOpen: action.isOpen}
    } 
    case SET_BIG_IMAGE_URL: {
      return {...state, bigImageUrl: action.url}
    } 
    case ADD_COMMENT: {
      // return {...state, commentsData: {date: 1, text: action.comment}}
      return {...state, commentsData: [...state.commentsData, {date: action.currentDate, text: action.comment}]}
    } 
    default:
      return state
  }
}

export const setImages = (imagesUrl) => ({type: ADD_IMAGES, imagesUrl})
export const toggleIsOpen = (isOpen) => ({type: TOGGLE_IS_OPEN, isOpen})
export const setBigImageUrl = (url) => ({type: SET_BIG_IMAGE_URL, url})
export const addComment = (currentDate, comment) => ({type: ADD_COMMENT, currentDate, comment})

export default contentReducer

