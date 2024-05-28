//Passing props to display dynamic data

function Profile(props) { 
    return <h1> Hello: {props.first}, {props.last} </h1>;
}
export default Profile;