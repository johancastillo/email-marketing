import React from 'react'
import Menu from '../components/Menu'
import Table from '../components/Table'

const Home = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                   <Menu />
                   <div className="col-md-12">
                       <Table />
                   </div>
                </div>
            </div>
        </>
    )
}

export default Home