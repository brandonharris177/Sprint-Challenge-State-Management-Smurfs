import React from 'react'
import { connect } from 'react-redux';
import {getSmurfs} from './actions';

const SmurfDisplay = (props) => {
    
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
  
  export default connect(mapStateToProps, {getSmurfs})(SmurfDisplay);