import { Component } from "react";

import './empoloyees-list-item.css';



class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            prize: ''
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase  
        }))
    }

    likeState = () => {
        this.setState(({prize}) => ({
           prize: !prize
        }))
    }

    render() {
        const {name, salary} = this.props;
        const {increase, prize} = this.state;
        let classNames = "list-group-item d-flex justify-content-between";
        if(increase) {
            classNames += ' increase';
        }
        if(prize) {
            classNames += ' like';
        }
        
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.likeState}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" 
                            className="btn-cookie btn-sm"
                            onClick={this.onIncrease}>
                                <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button" 
                            className="btn-trash btn-sm">
                                <i className="fas fa-trash"></i>
                    </button>
                        <i className="fas fa-star"></i>
                </div>
            </li> 
        )
    }
    
}

export default EmployeesListItem;