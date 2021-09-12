import React, { Component } from 'react'

import Modal from './common/Modal'
export default class Test extends Component {

  state = {
    showModal: true
  }

  showModal = () => {
    this.setState({ showModal: true })
  }
  hideModal = () => {
    this.setState({ showModal: false })
  }
  render() {
    return (
      <div>
        <img src="https://www.baidu.com/link?url=ojovue1qERIwxWfRwYa_NKOBPL5Nzwlc0criC8RxVMGYU2Og1w9TS3_OCn_vkosSLCv4kZP6QHwmQ11IHyDz9N1Djk2GQ9XQhjsm2hxS8fttj7GX9TEg_rPdIh1HIeNg6TKU-MKg_0Egr8Z6zT9cNMAqLzxRckIIrqS0HhICK_5VTyYw37DatZJStJhLEuP7NHZtTe_hGf8r0fvgwTmLOuaqb8KEbLtvuE-_4Tj_BH5HjwebiElm9t1UF1fd-CtHSpLlMIJeLrEjTzd4F8nWaWDNVC7axb3NyPSvF2kBonJyFnau6S5Tc0TTttpS3TklK_gHQjXFDeCCoszjGqaDSmqkUEK8vtcuBCeeiOyq_F6ni6djfbKlZG4MAikQGPDVuvBEXE9oK1KrXh4n2LkXeNgC-v6_V3_LrBwgmYRCZemuZ6lvz6kvuP4O2G_DB39qL2TT62uMXxi-n0BK1sLu2XpRJMc5Nl5s0ms_tw6r4G0BUm2wtePD749bLZdq6FNGNMUZtx3eUSySy0RdmpgURwjafeTJV8wNVrncUBjhUTOSkZ7dPRyZHuUCnuOUhuOOTEk3Yqq4eafPRJ-oCCoRSq&wd=&eqid=95fcda9d002b2d5a00000004613dcaed" alt="" />
        {
          this.state.showModal ?
          (
            <Modal onClose={this.hideModal}>
              <h1>dsfsdjdfkasjklsdfjkldfjklfsd</h1>
              <button onClick={this.hideModal}>关闭蒙层</button>
            </Modal>) : null
        }
        <button onClick={this.showModal}> 
          显示蒙层
        </button>
      </div>
    )
  }
}
