import React from 'react'
import Navbar from '../Navbar/Navbar'
import Card from "../Card/Card"


export default function Top_headlines() {
  return (
    <>
    <Navbar/>
    <Card QueryData={"headlines"}/>
    </>
  )
}
