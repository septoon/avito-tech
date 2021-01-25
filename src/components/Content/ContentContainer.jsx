import React from 'react';
import {connect} from 'react-redux'
import Content from './Content';
import { setImages, toogleIsOpen } from '../../redux/content-reducer'
// import { getImages } from '../../api/api';
import * as axios from 'axios'

class ContentContainer extends React.Component {
  componentDidMount() {
    axios.get('https://boiling-refuge-66454.herokuapp.com/images').then(response => {
        this.props.setImages(response.data)
    })
  } 
  render() {
    return <Content imagesUrl={this.props.imagesUrl}
                    isOpen={this.props.isOpen}
                    toogleIsOpen={this.props.toogleIsOpen} />
  }
}

const mapStateToProps = (state) => ({
  imagesUrl: state.content.urls,
  isOpen: state.content.isOpen
})
export default connect(mapStateToProps, {setImages, toogleIsOpen}) (ContentContainer)
