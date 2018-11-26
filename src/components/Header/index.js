import React, {Component} from 'react'

import './styles.scss';

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main_header">
                <div className="container">
                    <div className="flex">
                        <div className="main_header_logo">
                            <h1 className="main_header_logo_img">UNIVESP</h1>
                        </div>
                        <div className="main_header_user_icons">
                            <p className="main_header_user_icons_info"><b>#SOU</b> Rubens</p>
                            <span className="icon-bell-o main_header_user_icons_icon"></span>
                            <span className="icon-cog main_header_user_icons_icon"></span>
                            <span className="icon-user main_header_user_icons_icon"></span>
                            <span className="icon-logout main_header_user_icons_icon"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header