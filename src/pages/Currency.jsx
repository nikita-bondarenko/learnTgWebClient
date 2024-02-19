import React, { useEffect } from 'react'
const tg = window.Telegram.WebApp


export default function Currency() {
    useEffect(() => {
        tg.BackButton.show()
      }, [])
  return (
    <div className='content'>Список валют</div>
  )
}
