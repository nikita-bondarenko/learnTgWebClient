import React, { useEffect } from 'react'
const tg = window.Telegram.WebApp


export default function City() {
  useEffect(() => {
    tg.BackButton.show()
  }, [])
  return (
    <div className='content'>Список городов</div>
  )
}
