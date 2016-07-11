import React from 'react';

import classnames from 'classnames';

// a reusable editable component that will call a provided 
// onEdit callback
export default ({editing, value, onEdit, className, ...props}) => {
  if(editing) {

    return <Edit
      className={className}
      value={value}
      onEdit={onEdit}
      {...props} />;
  }

  return (
    <span className={classnames('vale', className)}
      {...props}>
      {value}
    </span>
  )
}

class Edit extends React.Component {
  render() {
    const {className, onEdit, value, ...props} = this.props;

    return <input
      type="text"
      className={classnames('edit', className)}
      autoFocus={true}
      defaultValue={value}
      onBlur={this.finishEdit}
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
