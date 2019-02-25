import React, {Component} from 'react';
//import './App.css';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


export class TodoApp extends React.Component {

    constructor(props) {
            super(props);
            this.state = {items: [], text: '', priority: 0, dueDate: moment()};
            this.handleTextChange = this.handleTextChange.bind(this);
            this.handlePriorityChange = this.handlePriorityChange.bind(this);
            this.handleDateChange = this.handleDateChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

    render() {
      return (
        <div >
        <div className="cardstyle">
          <Card >
              <h3>New TODO</h3>
              <img src={require('../img/tarea.jpg')} />
              <CardContent>
                <form onSubmit={this.handleSubmit} className="todoApp">


                    <TextField
                      id="text"
                      label="Text"
                      value={this.state.text}
                      onChange={this.handleTextChange}
                      margin="normal"
                      variant="outlined"
                    />


                    <br/>
                    <br/>

                    <TextField
                      id="priority"
                      type="number"
                      label="Priority"
                      value={this.state.priority}
                      onChange={this.handlePriorityChange}
                      margin="normal"
                      variant="outlined"
                    />

                    <br/>
                    <br/>

                    <div className="datepicker">
                      <p>Date</p>
                      <DatePicker
                          id="due-date"
                          selected={this.state.dueDate}
                          placeholderText="Due date"
                          single-line
                          onChange={this.handleDateChange}
                          outline
                          >
                      </DatePicker>
                    </div>
                    <br/>
                    <Button  variant="contained" color="primary" type="submit">
                      Add #{this.state.items.length + 1 }

                   </Button>
                </form>
              </CardContent>

            <CardActions>

            </CardActions>
          </Card>
        </div>

            <br/>
            <br/>
            <TodoList todoList={this.state.items}/>
        </div>
      );}
      handleTextChange(e) {
              this.setState({
                  text: e.target.value
              });
          }

          handlePriorityChange(e) {
              this.setState({
                  priority: e.target.value
              });
          }

          handleDateChange(date) {
              this.setState({
                  dueDate: date
              });
          }

          handleSubmit(e) {

              e.preventDefault();

              if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
                  return;

              const newItem = {
                  text: this.state.text,
                  priority: this.state.priority,
                  dueDate: this.state.dueDate,

              };
              this.setState(prevState => ({
                  items: prevState.items.concat(newItem),
                  text: '',
                  priority: '',
                  dueDate: ''
              }));
          }



      }
