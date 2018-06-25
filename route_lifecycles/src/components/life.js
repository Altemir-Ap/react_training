import React, {PureComponent} from 'react';

class Life extends PureComponent {
    // 1 get default props

    //2 set the default state
    state = {
        title: 'Life cycles'
    }

/*     //3 before render
    componentWillMount(){
        console.log('3 before render')
    }

    componentWillUpdate(){
        console.log('Before Update');
    }

    componentDidUpdate(){
        console.log('After Update');
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.title === 'something else'){
            return false;
        }

        return true;
    }

    //5 after jsx
    componentDidMount(){
        console.log('5 after render')
        document.querySelector('h3').style.color = 'red';
    } */
        
    //4 render jsx
    render(){
        console.log('render')
        return(
            <div>
                <h3>{this.state.title}</h3>

                <div onClick={
                    ()=>this.setState({
                    title:'something else'
                })}>
                Click to change
                </div>
            </div>
        )
    }


}

export default Life;