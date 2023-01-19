import React from "react";
class Hello extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){
        // this.props.isTitle ? this.props.setTitle('من تغییر کردم') : this.props.setTitle("به آموزش ریکت خوش آمدید");
        console.log('i am mount component Hello');
    }
    componentDidUpdate(){
        console.log('i am update component Hello');
    }
    
    render(){
        return(
            <h1>{this.props.title}</h1>
        );
    }
}

export default Hello;