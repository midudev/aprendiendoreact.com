import { Fragment } from 'react'

export const CardContent = ({ description, image, title }) => (
  <Fragment>
    <section>
      <img src={`../../../static/cardContents/${image}.png`} />
      <h3>{title}</h3>
    </section>
    <style jsx>{`
      section {
        border-radius: 20px;
        box-shadow: 0px 0px 10px 0px rgba(4,107,227,0.30);
        display: inline-block;
        flex-grow: 1;
        margin-bottom: 2%;
        max-width: 23%;
        min-width: 23%;
        overflow: hidden;
        position: relative;
      }
      @media (max-width: 769px) {
        section {
          margin-bottom: 3%;
          min-width: 32%;
          max-width: 32%;
        }
      }
      @media (max-width: 500px) {
        section {
          margin-bottom: 4%;
          min-width: 48%;
          max-width: 48%;
        }
      }
      h3 {
        background: rgba(4, 107, 227, 0.85);
        color: #fff;
        left: 0;
        font-size: 14px;
        letter-spacing: -1px;
        max-width: 80%;
        padding: 8px;
        position: absolute;
        text-shadow: 0px 0px 2px rgba(0, 0, 0, .5);
        top: 8px;
        word-break: break-word;
      }
      img {
        height: auto;
        vertical-align: bottom;
        width: 100%;
      }
    `}</style>
  </Fragment>
)
