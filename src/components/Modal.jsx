import React, {Component} from 'react'
import axios from 'axios'

class Modal extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      client: {
        "id": 12,
        "name": "Ana",
        "last_name": "Castillo",
        "photo": "",
        "age": "19",
        "email": "jcjohan2707@gmail.com",
        "phone": "04242183299",
        "country": "Venezuela",
        "interests": ["comida", "tecnología", "hogar", "ropa"],
        "created": "Enero 25, 2019"
      }
    }

    this.handleCreate = this.handleCreate.bind(this)
  }
  
  handleCreate(){
    axios.post('http://localhost:3001/clients', this.state.client)
  }

  render(){
    return (
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Agregar un nuevo cliente
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
  
            <div className="modal-body">
              <form>
  
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Nombre</label>
                  <input type="email" className="form-control" id="name" aria-describedby="emailHelp" />
                </div>
  
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
  
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
              </form>
            </div>
  
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary" onClick={this.handleCreate} data-bs-dismiss="modal">Crear cliente</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
