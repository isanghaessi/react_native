import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';
import TapBar from './TapBar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        paddingTop: 60,
    },
});

class App extends Component {
    constructor() {
        super();
        this.todoIndex = 0;
        this.submitTodo = this.submitTodo.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.setType = this.setType.bind(this);
    }
    state = {
        inputValue: '',
        todos: [],
        type: 'All',
    };

    inputChange(inputValue) {
        console.log('input Value: ', inputValue);
        this.setState({inputValue});
    }

    submitTodo() {
        if (this.state.inputValue.match(/^\s*$/)) {
            return;
        }
        const todo = {
            title: this.state.inputValue,
            todoIndex: this.todoIndex,
            complete: false,
        };
        this.todoIndex++;
        const todos = [...this.state.todos, todo];
        this.setState({todos, inputValue: ''}, () => {
            console.log('state: ', this.state);
        });
    }

    deleteTodo(todoIndex) {
        let {todos} = this.state;
        todos = todos.filter((todo) => todo.todoIndex !== todoIndex);
        this.setState({todos});
    }

    toggleComplete(todoIndex) {
        let {todos} = this.state;
        todos.forEach((todo) => {
            if (todo.todoIndex === todoIndex) {
                todo.complete = !todo.complete;
            }
        });
        this.setState({todos});
    }

    setType(type) {
        this.setState({type});
    }

    render() {
        const {inputValue, todos, type} = this.state;

        return (
            <View style={styles.container}>
                <ScrollView
                    keyboardShouldPersistTaps="always"
                    style={styles.content}
                >
                    <Heading />
                    <Input
                        inputValue={inputValue}
                        inputChange={(text) => this.inputChange(text)}
                    />
                    <Button submitTodo={this.submitTodo} />
                    <TodoList
                        todos={todos}
                        deleteTodo={this.deleteTodo}
                        toggleComplete={this.toggleComplete}
                        type={type}
                    />
                </ScrollView>
                <TapBar type={type} setType={this.setType} />
            </View>
        );
    }
}

export default App;
