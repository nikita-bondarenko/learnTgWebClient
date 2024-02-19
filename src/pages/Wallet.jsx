import React, { useEffect } from 'react'
const tg = window.Telegram.WebApp

export default function Wallet() {

  useEffect(() => {
    tg.BackButton.show()
  }, [])
  return (
    <div className='content'>Список кошельков</div>
  )
}
