import React from 'react';
import { connect, dispatch } from 'react-redux';
import { fetchDialog } from './actions';
import { bindActionCreators } from 'redux';


 class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  handleFetchDialogTitles(){
  	this.props.dispatch( fetchDialog() );
  }

  componentDidMount() {
  	this.props.dispatch( fetchDialog() );
  }

  componentWillReceiveProps(nextProps) {
  	console.log("WillReceiveProps ", this.props);
  	console.log("WillReceiveProps2 ", nextProps)
  }


  render() {
  	console.log(this.props)
  	if(!this.props.dialog) {
  		console.log('no Dialogs ' + this.props.dialog)

  		return <div> loading</div>

  	} else {
  		 // var options = null;
            console.log("inside conditional ", this.props.dialog)
             // options = this.props.dialog.map((dialog) => {
             //  return <option className="" key={dialog.id}>{dialog.name}</option>                
             //  });
             // console.log(options); 

  	const{name} =this.props
            console.log('at render ', this.props)

    return (
      <div>
        hello
        {this.props.dialog}
     </div>
    );
	 }
  }
}



function mapStateToProps(state){
	console.log("mapStateToProps " + JSON.stringify(state))

	return {
		dialog: state.dialog,

		
	}
} 


export default connect(mapStateToProps)(HomePage);



