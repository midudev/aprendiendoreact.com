import { Fragment } from 'react'

export const Header = () => (
  <Fragment>
    <header>
      <nav>
        <a href='/cursos'>Cursos</a>
        <a href='/blog'>Blog</a>
      </nav>
    </header>
    <style jsx>{`
      header {
        background: #20232a;
        display: flex;
        height: 50px;
      }
      nav {
        align-self: flex-end;
      }
      nav a {
        border-bottom: 2px solid transparent;
        color: #fff;
        display: inline-block;
        font-weight: 300;
        line-height: 48px;
        padding-left: 16px;
        padding-right: 16px;
        transition: color 0.2s ease-out, background-color .2s ease-out;
      }
      nav a:hover {
        background-color: #61dafb;
        color: #000;
      }
      `}
    </style>
  </Fragment>
)
