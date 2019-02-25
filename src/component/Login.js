import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export class Login extends React.Component{
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {user:'',password:''};
      this.handleUserChange=  this.handleUserChange.bind(this);
      this.handlePasswordChange=  this.handlePasswordChange.bind(this);
    }
    render(){
      localStorage.setItem('user', 'user@user.com');
      localStorage.setItem('password', 'password');
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">Sign in</Typography>
                        <form onSubmit={this.handleSubmit} className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email"
                                value={this.state.user}
                                onChange={this.handleUserChange}
                                autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
    handleUserChange(e) {
            this.setState({
                user: e.target.value
            });
        }
    handlePasswordChange(e) {
            this.setState({
                password: e.target.value
            });
        }
    handleSubmit(e) {
            e.preventDefault();

            if(this.state.user===localStorage.getItem('user')&&this.state.password===localStorage.getItem('password')){
            localStorage.setItem('isLoggedIn', true);
            console.log(localStorage.getItem("isLoggedIn"));
            
          }

        }

}
