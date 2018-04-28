import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

var types = ['hr1','manager1','employee1'];
var password = "password"

const styles = theme => ({
	card: {
		maxWidth: 350,
		margin: '5% auto',
		padding: '2%',
	},
	container: {
		display: 'flex'
	},
	formControl: {
		margin: theme.spacing.unit,
		width: `calc(100% - ${2*theme.spacing.unit}px)`,
	},
	button: {
		margin: 'auto',
		width: '100%'
	}
});

class LoginPage extends Component {

	state = {
		id: "",
		password: "",
		idError: false,
		passwordError: false,
		idErrorMsg: "",
		passwordErrorMsg: "",
	}

	handleIdChange = event => {
	    this.setState({ id: event.target.value, idError: false, idErrorMsg: ""});
	}

	handlePassChange = event => {
	    this.setState({ password: event.target.value, passwordError: false, passwordErrorMsg: "" });
	}

	handleSubmit = event => {
		if(types.indexOf(this.state.id) >= 0) {
			if(this.state.password === password) {
				console.log(this)
				this.props.history.push('/dashboard');
			} else {
				this.setState({ passwordError: true, passwordErrorMsg: "Password Invalid" })
			}
		} else {
			this.setState({ idError: true, idErrorMsg: "Username Not Found" })
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<Card className={classes.card}>
				<CardContent>
					<div classes={classes.container}>
				  		<FormControl className={classes.formControl}>
					        <InputLabel htmlFor="userId">User ID</InputLabel>
					        <Input id="userId" error={this.state.idError} value={this.state.id} onChange={this.handleIdChange.bind(this)} />
					        <FormHelperText id="id-error-text">{ this.state.idErrorMsg }</FormHelperText>
				        </FormControl>
				        <FormControl className={classes.formControl}>
					        <InputLabel htmlFor="password">Password</InputLabel>
					        <Input id="password" error={this.state.passwordError} value={this.state.password} onChange={this.handlePassChange.bind(this)} />
					        <FormHelperText id="password-error-text">{ this.state.passwordErrorMsg }</FormHelperText>
				        </FormControl>
				  	</div>
				</CardContent>
				<CardContent>
					<Button variant="raised" color="primary" className={classes.button} onClick={this.handleSubmit.bind(this)} >
        				Login
     				</Button>
				</CardContent>
	  		</Card>
		)
	}
}

export default withStyles(styles)(LoginPage);


