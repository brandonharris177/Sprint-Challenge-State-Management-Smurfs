import React, {useState} from 'react'
import { connect } from 'react-redux';
import {getSmurfs, submitSmurf} from './actions';

const SmurfDisplay = (props) => {
    const [newSmurf, setNewSmurf] = useState({name: "", age: "", height: ""})

    const handleChange = (event) => {
        setNewSmurf({...newSmurf, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.submitSmurf(newSmurf)
    }
    
    return (
        <>
        <div>Its working</div>
        {props.loading && (<div>Incoming Smurf!</div>)}
        {props.smurfs && props.smurfs.map(smurf =>
            // console.log(smurf),
            <div key = {smurf.id}>
            <h2>{smurf.name}</h2>
            <h2>{smurf.age}</h2>
            <h2>{smurf.height}</h2>
            </div>
        )}
        <button onClick={props.getSmurfs}>Get Smurfs</button>
       
        <form onSubmit = {handleSubmit}>
            <input 
                name = "smurfName" 
                type = "text" 
                placeholder = "Smurf Name"
                onChange = {handleChange}/>
            <input 
                name = "smurfAge" 
                type = "number" 
                placeholder = "Smurf Age"
                onChange = {handleChange}/>
            <input 
                name = "smurfHeight" 
                type = "number" 
                placeholder = "Smurf Height (cm)"
                onChange = {handleChange}/>
            <button>Submit Smurf</button>
        </form>
        </>
    )
}

const mapStateToProps = state => {
    // console.log(state.smurfs)
    return {
        smurfs : state.smurfs,
        loading: state.loading
    }
  }
  
  export default connect(mapStateToProps, {getSmurfs, submitSmurf})(SmurfDisplay);