import React, { Component } from 'react';
class App extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div style={{ padding: 24, minHeight: 360 }} className='homemain'>
                <div className='topDiv'>
                    <div className='topLdiv'>
                        <h2>商住</h2>
                    </div>
                    <div className='topRdiv'>
                        <h2>厂房</h2>
                    </div>
                </div>
                <div className='centerDiv'>
                    <h4>本月</h4>
                </div>
                <div className='downDiv'>
                    我未来可是一个图表呢
                </div>
            </div>
        )
    }
}
export default App;