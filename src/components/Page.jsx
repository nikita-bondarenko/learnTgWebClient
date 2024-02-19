import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
const tg = window.Telegram.WebApp


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
