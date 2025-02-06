import React, {Component} from "react";

class Select extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange(e){
        const boolValue = e.target.value === "true"; // Convert string to boolean
        this.setState({value: boolValue}, function(){
            this.props.onChange(this.state.value);
        });
    }

    render(){
        return (
            <div>
                <select className="form-control" onChange={this.onChange.bind(this)} value={this.state.value}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
        )
    }
}

export default Select;
