import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <main className="container mx-auto">
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Layout;