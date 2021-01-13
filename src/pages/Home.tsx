import React from 'react'
import Menu from '../components/Menu'
import Modal from '../components/Modal'
import Table from '../components/Table'

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Modal />
          <Menu />
          <Table />
        </div>
      </div>
    </>
  )
}

export default Home
