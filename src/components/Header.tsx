import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { toggleTheme, toggleLanguage } from '../redux/reducers/AppReducer'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Switch from './common/Switch'
import classnames from 'classnames'

const Header = () => {
  const dispatch = useDispatch()

  const { isDarkTheme, language } = useSelector(({ appReducer }: any) => appReducer)
  const [toggle, setToggle] = React.useState(isDarkTheme)
  const [engLang, setEngLang] = React.useState(language === 'en')
  const { i18n } = useTranslation()

  React.useEffect(() => {
    dispatch(toggleTheme({ isDarkTheme: toggle }))
  }, [dispatch, toggle])

  React.useEffect(() => {
    dispatch(toggleLanguage({ language: engLang ? 'en' : 'ru'}))
    i18n.changeLanguage(engLang ? 'en' : 'ru')
  }, [dispatch, engLang, i18n])

  return (
    <>
        <Navbar
          className={classnames('Header', { 'Header--dark': isDarkTheme})}
          sticky='top'
          collapseOnSelect
          expand='lg'
        >
          <div className='wrapper-header'>
            <Navbar.Brand as={Link} to='/leagues_page'>
              <i className='fas fa-futbol'></i>React-Football
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className="ml-auto">
                <Navbar.Text>
                  <Switch
                    onChange={setToggle}
                    id='1'
                    name='switchTheme'
                    checked={toggle}
                    icons={[<i className='fas fa-moon'></i>, <i className='fas fa-sun'></i>]}
                  />
                </Navbar.Text>
                <Navbar.Text>
                  <Switch
                    onChange={setEngLang}
                    id='2'
                    name='switchLang'
                    checked={engLang}
                    icons={[<div>en</div>, <div>ru</div>]}
                  />
                </Navbar.Text>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
    </>
  )
}

export default Header
