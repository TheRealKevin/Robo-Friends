import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/scroll';
import './App.css'

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value);  
    }

    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(Response => {
            return Response.json();
        })
        .then(users => {
            this.setState({robots: users})
        })
    }

    render(){
        const {robots,searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ? <h1>Loading</h1> : (
            <div className = 'tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots = {filteredRobots}/>;
                </Scroll>
            </div>
        );
    }
}

export default App;
