import React from 'react';

const SubpageHeader = props => {
  return (
    <section className="subpage-header">
      <h1 className="subpage-header__title">{props.title}</h1>
    </section>
  );
};

export default SubpageHeader;
