import React from 'react';

type Props = {
  active: boolean,
  onClick: () => void,
  children?: React.ReactNode;
}

const Link = (props: Props) => {
    if (props.active) {
      return <span>{props.children}</span>;
    }
  
    return (
      <a href='#'
         onClick={e => {
           e.preventDefault();
           props.onClick();
         }}
      >
        {props.children}
      </a>
    );
  };

  export default Link;