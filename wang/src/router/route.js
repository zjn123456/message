import React, { Component } from "react"
import { Route, Switch, Redirect } from "react-router-dom"

class Routerview extends Component {
    render() {
        let { routes } = this.props;
        return (
            <Switch>
                {
                    routes.map((item, index) => {
                        return <Route key={index} path={item.path} render={(location)=>{
                            if (item.children){
                                return <item.component {...location} routes={item.children}/>
                            }else{
                                return <item.component {...location}/>
                            }
                        }}></Route>
                    })
                }
                <Route path="/" exact render={() => <Redirect to='/login' />} />
                <Route path="/home" exact render={() => <Redirect to='/home/index' />} />
            </Switch>
        )
    }
}
export default Routerview;