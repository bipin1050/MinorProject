import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Invoice from './invoice'
import Sellproduct from './sellproduct'

const InvoiceWrapper = ({ products }) => {
  return (
    <Routes>
        <Route  path="/" element={<Sellproduct products={products} />} />
        <Route path="invoice" element={<Invoice />} />
    </Routes>
  )
}

export default InvoiceWrapper