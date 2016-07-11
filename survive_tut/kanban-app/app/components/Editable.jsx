import React from 'react';

// a reusable editable component that will call a provided 
// onEdit callback
export default ({editing, value, onEdit, ...props}) => {
  if(editing) {
    return <Edit value={value} onEdit={onEdit} {...props} />;
  }

  return <span {...props}>{value}</span>;
}

class Edit extends React.Component {
  render() {
    const {value, ...props} = this.props;

    return <input
      type="text"
      autoFocus={true}
      defaultValue={value}
      onBlue={this.finishEdit}
      onKeyPress={this.checkEnter}
      {...props} />;
  }
  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  }
  finishEdit = (e) => {
    const value = e.target.value;

    // if we have an on edit callback, call it with value
    if(this.props.onEdit) {
      this.props.onEdit(value);
    }
  }
}
