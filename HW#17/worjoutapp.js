import React, ( component ) from React;
constructor (props);
this.state = {
    username:'',
    time: 0,
    description:'',
    date: new Date(),
    users: []
}

onChangeUsername(e) {
    this.setState ({
        username: e.target.value
    });
}
onChangeTime(e) {
    this.setState ({
        time: e.target.value
    });
}  
onChangeDescription(e) {
    this.setState ({
        description: e.target.value
    });
} 
onChangeDate(e) {
    this.setState ({
        date: e.target.value
    });
} 
onChangeName(e) {
    this.setState ({
        Name: e.target.value
    });
} 

render() {
    return (
        <div>
            <form onSubmit={this.onSubmit}>
                <label>Username:</label>
                <select ref="userInput">
                </select>
            </form>
        </div>
    )
    
}
super(props);
this.onChangeUsername = this.onChangeUsername.bind(this);
this.onChangeDescription = this.onChangeDescription.bind(this);
this.onChangeTime = this.onChangeTime.bind(this);
this.onChangeDate = this.onChangeDate.bind(this);
this.onSubmit = this.onSubmit.bind(this);