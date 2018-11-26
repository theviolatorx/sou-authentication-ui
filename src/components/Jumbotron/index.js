import React,{Component} from'react'

class HeaderForm extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="main_content_register_user_header">
                <span className="icon-newspaper"></span><h2>Colaboradores // </h2><h4> Módulo de usuários,
                autenticação econtrole de acesso</h4>
            </div>
        )
    }
}

export default HeaderForm