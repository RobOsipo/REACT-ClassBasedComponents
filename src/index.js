import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay.js";
// import './SeasonDisplay.css';
import Loading from './Loading.js';



class App extends React.Component {

    state = { lat: null, errorMessage: '' };

   componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat: position.coords.latitude}),
        err => this.setState({ errorMessage: err.message })
        )
   }

   renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>
    } 
     if (!this.state.errorMessage && this.state.lat) {
         return <SeasonDisplay lat={this.state.lat} />
    } 

    return (
     <Loading message="Please Wait while we fetch your location" />
    )
   }

    render() {
       
         return (
             <div>
                 {this.renderContent()}
             </div>
         )
        
    }
}


ReactDOM.render(<App />, document.getElementById('root'))