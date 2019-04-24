import React, { Component } from 'react';
import Navbar from './Navbar';

class Layout extends Component {
    render() {
        return (<div>
            <Navbar/>
            <main className="">
                {this.props.children}
            </main>

        </div>)
    }
}
export default Layout;