constructor (props) {
    super(props);
    this.deleteActivity = this.deleteActivity.bind(this);
    this.state= {activity: []};
}
componentDidMount() {
    axios.get('http://localhost:8080/activity/')
    .then(response=> {
        this.setState({ activities: response.data})
    })
    .catch((error))=> {
        console.log(error);
    }
}