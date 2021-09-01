import React, { Component } from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // this.setState({  // Изменяет состояние, т.е. состояние на момент регистрации
    //     value: 10,
    // });

    this.setState(prevState => ({
      // Обновить от предыдущего. Основываясь на предыдущем передаем функцию
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <div className="Counter">
        <Value value={value} />
        <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
      </div>
    );
  }
}

export default Counter;

// class Counter extends React.Component {
//     handleIncrement = event => {
//         console.log('Кликнули');
//         // console.log(event.target);

//         // const target = event.target;
//         const {target} = event;  // деструктуризация

//         setTimeout(() => {
//             console.log(target);
//         }, 1000)
//     }

//     handleDecrement = event => {
//        console.log('Кликнули');
//     }

//     render() {
//         return (
//             <div className='Counter'>
//             <span className='Counter__value'>0</span>

//             <div className='Counter__controls'>
//                     <button
//                         type='button'
//                         onClick={this.handleIncrement}>
//                         Увеличить на 1
//                     </button>
//                     <button
//                         type='button'
//                         onClick={this.handleDecrement}>
//                         Уменьшить на 1
//                     </button>
//             </div>
//         </div>);
//     }
// }

// export default Counter;
