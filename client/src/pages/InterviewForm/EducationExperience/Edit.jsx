import React from 'react';
import Edit from '../HocInterview/Edit';

export default class EducationEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        list: [],
    }
  }
  componentDidMount() {
    
  }
  render() {
    const { params } = this.props
    return (
      <Edit 
        params = {params}
      />
    );
  }
}