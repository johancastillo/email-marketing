import React from 'react'

const Table = () => {
    return (
        <div className="col-md-8">
          <div className="client-bar">
            <h1>Clients</h1>

            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
              + Add client
            </button>

          </div>
          
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Cliente</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Intereses</th>
                        <th scope="col">Creado</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th className="client-column">
                            <div>
                                <img className="img-client" src="https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s150x150/41138827_478373809328665_5784876568920719360_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=TcQ2NnxSMGEAX9sZw2Z&tp=1&oh=65d25b8817040f9d2ec7deb68ce9678f&oe=602873F4" alt="" />
                            </div>

                            <div className="client-info">
                                <span>Johan Castillo</span>
                                <p>jcjohan2707@gmail.com</p>
                            </div>
                        </th>

                        <td>19</td>

                        <td>
                            Otto
                        </td>

                        <td>
                            @mdo
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
