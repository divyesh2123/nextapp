import reviews from '@/data/myData'
import { IReview } from '@/interface/IReview'
import React from 'react'

export default function review() {
  return (
    <div>{reviews.map((d:IReview)=>{

        return (<div>{d.name}</div>)
    })}</div>
  )
}
