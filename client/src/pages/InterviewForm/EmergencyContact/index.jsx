import React from 'react';
import List from '../HocInterview/List';

const Item = ({item}) => (
  <div>
    <p>{item.fullName}</p> 
    <p>{item.phone}</p>
  </div>
);



export default class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        list: [],
    }
  }
  componentDidMount() {
    
  }

  render() {
    
    return (
      <List 
        name='紧急联系人'
        routeUrl='/emergency'
        nameSpace='emergency'
        params={{'template_id':5, template_module_id:5}}
        apiUrl='INTERVIEW_EMERGENCY'
        ListItem={Item}
      />
    );
  }
}