import React, { useEffect } from 'react'
const tg = window.Telegram.WebApp
import { useNavigate } from "react-router-dom";


export default function Page({text}) {

    const navigate = useNavigate();
    useEffect(() => {
        tg.BackButton.show()
        tg.BackButton.onClick(() => {
            navigate('/')
        })	

      }, [])
  return (
    <div className='content'>{text}</div>
  )
}
