import { Fragment } from 'react'

const getBackgroundImage = ({ backgroundImage }) => {
  return backgroundImage === 'none'
    ? 'none'
    : `url("../../static/backgrounds/${backgroundImage}.png")`
}

export const ContentContainer = ({
  backgroundImage = 'none',
  children,
  justifyContent = 'flex-start'
}) => (
  <Fragment>
    <div>
      {children}
    </div>
    <style jsx>{`
    div {
      background-image: ${getBackgroundImage({ backgroundImage })};
      background-repeat: repeat;
      display: flex;
      justify-content: ${justifyContent};
      margin-left: auto;
      margin-right: auto;
      padding: 2%;
    }
    @media (min-width: 780px) {
      div {
        padding: 1%;
      }
    }
    `}</style>
  </Fragment>
)
