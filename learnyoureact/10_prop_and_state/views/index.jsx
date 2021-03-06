import React from 'react';

let style = {
    checkedTodo: {
        textDecoration: 'line-through'
    },
    notCheckedTodo: {
        textDecoration: 'none'
    },
    table: {
        border: '2px solid black'
    },
    tableContent: {
        border: '1px solid black'
    }
};

export default class TodoBox extends React.Component {
    render() {
        return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList data={this.props.data}/>
                <TodoForm />
            </div>
        );
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            titleValue: '',
            detailValue: ''
        };
    }

    changeTitle(e) {
        this.setState({
            titleValue: e.target.value,
        });
    }

    changeDetail(e) {
        this.setState({
            detailValue: e.target.value
        });
    }

    addTodo() {
        var data = this.state.data;
        data.push({
            title: this.state.titleValue,
            detail: this.state.detailValue
        });
        this.setState({
            data: data,
            titleValue: '',
            detailValue: ''
        });
    }

    deleteTodo(title) {
        this.setState({
            data: this.state.data.filter(function(todo) {
                return todo.title !== title;
            })
        });
    }

    render() {
        var todos = this.props.data.map((obj) => {
            return <Todo title={obj.title} key={obj.title} onDelete={this.deleteTodo}>{obj.detail}</Todo>
        });
        return (
            <div className="todoList">
                <div>
                    Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} />
                    Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} />
                    <button onClick={this.addTodo}>Add</button>
                </div>
                <table style={style.table}>
                    <tbody>
                    {todos}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            style: style.notCheckedTodo
        };
    }

    handleChange(e) {
        this.setState({
            checked: e.target.checked,
            style: e.target.checked ? style.checkedTodo : style.notCheckedTodo
        });
    }

    _onDelete() {
        this.props.onDelete(this.props.title);
    }

    render() {
        return (
            <tr style={this.state.style}>
                <td style={style.tableContent}>
                    <button onClick={this._onDelete}>X</button>
                </td>
                <td style={style.tableContent}>
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
                </td>
                <td style={style.tableContent}>{this.props.title}</td>
                <td style={style.tableContent}>{this.props.children}</td>
            </tr>
        );
    }
}
Todo.propTypes = {
    title: React.PropTypes.string.isRequired
};

class TodoForm extends React.Component {
    render() {
        return (
            <div className="todoForm">
                I am a TodoForm.
            </div>
        );
    }
}
