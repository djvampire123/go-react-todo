import React, { Component } from "react";
import axios from "axios";
import { Card, Header, Form, Input, Icon, Button } from "semantic-ui-react";

let endpoint = "http://localhost:9000";

class ToDolist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: "",
            items: [],
        };
    }

    componentDidMount() {
        this.getTask();
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        let { task } = this.state;

        if (task) {
            axios
                .post(
                    endpoint + "/api/tasks",
                    { task },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((res) => {
                    this.getTask();
                    this.setState({
                        task: "",
                    });
                    console.log("Task created:", res.data);
                })
                .catch((error) => {
                    console.error("There was an error creating the task!", error);
                });
        }
    };

    getTask = () => {
        axios
            .get(endpoint + "/api/tasks")
            .then((res) => {
                console.log("Data fetched:", res.data);
                if (res.data) {
                    this.setState({
                        items: res.data.map((item) => {
                            let color = "yellow";
                            let style = {
                                wordWrap: "break-word",
                            };
                            if (item.status) {
                                color = "green";
                                style["textDecorationLine"] = "line-through";
                            }
                            return (
                                <Card key={item._id} color={color} fluid className="rough">
                                    <Card.Content>
                                        <Card.Header textAlign="left">
                                            <div style={style}>{item.task}</div>
                                        </Card.Header>

                                        <Card.Meta textAlign="right">
                                            {!item.status && (
                                                <Icon
                                                    name="check circle"
                                                    color="green"
                                                    onClick={() => this.updateTask(item._id)}
                                                />
                                            )}
                                            {item.status && (
                                                <Icon
                                                    name="redo"
                                                    color="blue"
                                                    onClick={() => this.undoTask(item._id)}
                                                />
                                            )}
                                            <span style={{ paddingRight: 10 }}>
                                                {item.status ? "Undo" : "Done"}
                                            </span>
                                            <Icon
                                                name="delete"
                                                color="red"
                                                onClick={() => this.deleteTask(item._id)}
                                            />
                                            <span style={{ paddingRight: 10 }}>Delete</span>
                                        </Card.Meta>
                                    </Card.Content>
                                </Card>
                            );
                        }),
                    });
                } else {
                    this.setState({
                        items: [],
                    });
                }
            })
            .catch((error) => {
                console.error("There was an error retrieving the tasks!", error);
            });
    };

    updateTask = (id) => {
        axios
            .put(endpoint + "/api/tasks/" + id, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                console.log(res);
                this.getTask();
            })
            .catch((error) => {
                console.error("There was an error updating the task!", error);
            });
    };

    undoTask = (id) => {
        axios
            .put(endpoint + "/api/undoTask/" + id, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                console.log(res);
                this.getTask();
            })
            .catch((error) => {
                console.error("There was an error undoing the task!", error);
            });
    };

    deleteTask = (id) => {
        axios
            .delete(endpoint + "/api/deleteTask/" + id, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                console.log(res);
                this.getTask();
            })
            .catch((error) => {
                console.error("There was an error deleting the task!", error);
            });
    };

    render() {
        return (
            <div>
                <div className="row">
                    <Header className="header" as="h1" color="yellow">
                        TO DO LIST
                    </Header>
                </div>
                <div className="row">
                    <Form onSubmit={this.onSubmit} style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
                        <Input
                            type="text"
                            name="task"
                            onChange={this.onChange}
                            value={this.state.task}
                            fluid
                            placeholder="Create Task"
                            style={{ marginBottom: '15px' }}
                        />
                        <div style={{ textAlign: 'center' }}>
                            <Button type="submit" color="blue" style={{ padding: '10px 25px' }}>
                                Create Task
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className="row">
                    <Card.Group>{this.state.items}</Card.Group>
                </div>
            </div>
        );
    }
}

export default ToDolist;
