import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const tg = window.Telegram.WebApp

export default function Main() {
  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }
  return (
    <div className="content">
      <div className='top'>
        <Link to={'/city'} className='top__button'>Город</Link>
        <Link to={'/wallet'} className='top__button'>Кошелёк</Link>
      </div>
      <div className='display'>
        <div className='display__block'>
          <div className='display__left'>
            <div className='display__title'>Вы отдаёте</div>
            <div className='display__text'>1</div>
          </div>
          <Link to={'/crypto'} className='display__currency'>USDT</Link>
        </div>
        <div className='display__block'>
          <div className='display__left'>
            <div className='display__title'>Вы отдаёте</div>
            <div className='display__text'>100</div>
          </div>
          <Link to={'/currency'} className='display__currency'>USDT</Link>
        </div>
      </div>

      <button className='close' onClick={onClose}>Закрыть</button>
    </div>
  )
}
