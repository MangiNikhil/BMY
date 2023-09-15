import React from 'react'
class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            planet:"earth"
        }
        console.log("constructor");
    } 
    componentDidMount(){

        this.setState({planet:"jupiter"})
        console.log("cdid mount");
       
    }
    shouldComponentUpdate(nextProp,nextState){
        console.log(" shouldComponentUpdate");
        console.log({
            nextProp,nextState
        });
        return true;
    }
     getSnapshotBeforeUpdate(prevProp,prevState){
        console.log(" getSnapshotBeforeUpdate");
        console.log({
            prevProp,prevState
        });
        return true;
    }
    componentDidUpdate(){
        console.log(this.state)
    }
    render(){
        console.log("rendered");
        return(
         <div>
         <h1>
         {this.props.name}
         </h1>
         <p>
         {this.props.desc}
         </p>
         <p>
         {this.state.planet}
         </p>
         </div>
        );
    }
}
export default User;

/*
const User=(params)=>{

   return(
    <div>
    <h1>
    {params.name}
    </h1>
    <p>
    {params.desc} 
    </p>
    </div>
   );

};
export default User;







LIFE CYCLE METHODS

1.MOUNT The component is initially rendered in a DOM

1.a.Constructor, 
1.b. Render
1.c.componentDidMount -sideeffects (get exlore repos, activities, links)

2 .UPDATE Component is being updated 
2.a.Constructor
2.b.shouldComponentUpdate (nextProp, nextState)-> true or false
2.c.render()
2.d.getSnapshotBeforeUpdate(prevProp, prevState)-> true or false. 7/2.e.componentDidUpdate()
2.e. componentDidUpdate()
3 UNMOUNT -> Component is removed from the DOM
3.a. componentWillUnmount
*/