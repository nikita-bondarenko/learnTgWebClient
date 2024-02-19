import React, { useEffect } from 'react'
const tg = window.Telegram.WebApp


export default function Cripto() {
    useEffect(() => {
        tg.BackButton.show()
      }, [])
  return (
    <div className='content'>Список криптовалют</div>
  )
}
