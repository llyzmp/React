import React, { Component } from 'react'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import './index.css'

export default class Admin extends Component {
  render() {
    return (
      <div>
        <Layout header={ <Header />} aside={ <Menu />} >

        </Layout>
      </div>
    )
  }
}
