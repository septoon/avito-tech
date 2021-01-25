import React from 'react';
import {connect} from 'react-redux'
import Content from './Content';
import { setImages, toggleIsOpen, setBigImageUrl, addComment } from '../../redux/content-reducer'
// import { getImages } from '../../api/api';
import * as axios from 'axios'

class ContentContainer extends React.Component {
  componentDidMount() {
    axios.get('https://boiling-refuge-66454.herokuapp.com/images').then(response => {
        this.props.setImages(response.data)
        console.log(response.data)
    })
  } 
  render() {
    return <Content imagesUrl={this.props.imagesUrl}
                    isOpen={this.props.isOpen}
                    toggleIsOpen={this.props.toggleIsOpen}
                    url={this.props.url}
                    setBigImageUrl={this.props.setBigImageUrl}
                    comments={this.props.comments}
                    addComment={this.props.addComment} />
  }
}

const mapStateToProps = (state) => ({
  imagesUrl: state.content.urls,
  isOpen: state.content.isOpen,
  url: state.content.bigImageUrl,
  comments: state.content.commentsData
})
export default connect(mapStateToProps, {setImages, toggleIsOpen, setBigImageUrl, addComment}) (ContentContainer)
