import React, {Component} from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main_content_register_user">
                <aside className="main_content_register_user_aside">
                    <div className="main_content_register_user_aside_links">
                        <a href="/"><span className="icon-map icon-notext"></span></a>
                    </div>
                    <div className="main_content_register_user_aside_links">
                        <a href="/"><span className="icon-frames icon-notext"></span></a>
                    </div>
                    <div className="main_content_register_user_aside_links">
                        <a href="/"><span className="icon-users icon-notext"></span></a>
                    </div>
                    <div className="main_content_register_user_aside_links">
                        <a href="/"><span className="icon-align-justify icon-notext"></span></a>
                    </div>
                    <div className="main_content_register_user_aside_links">
                        <a href="/"><span className="icon-calendar icon-notext"></span></a>
                    </div>
                    <div className="main_content_register_user_aside_links">
                        <a href="/"><span className="icon-envelope-o icon-notext"></span></a>
                    </div>
                    <div className="main_content_register_user_aside_links">
                        <a href="/"><span
                            className="icon-speech-streamline-talk-user icon-notext"></span></a>
                    </div>
                </aside>
            </div>
        )
    }
}

export default Sidebar;