import React, {Component} from 'react';
import store from './store/store';
import Link from './Link';

type Props = {
    filter: any ,
    showState: Readonly<{}>,
    children?: React.ReactNode;
};
class FilterLink extends Component<Props> {

    componentDidMount() {
        store.subscribe(() =>
        this.forceUpdate())    
    };
    
    render() {
      const props = this.props;
      const state = store.getState();
      
      return (
        <Link
          active={ props.filter === props.showState }
          onClick={() =>
            store.dispatch({
              type: 'SHOW_ALL',
              filter: props.filter
            })
          }
        >
          {props.children}
        </Link>
      );
    }
  }
  export default FilterLink;