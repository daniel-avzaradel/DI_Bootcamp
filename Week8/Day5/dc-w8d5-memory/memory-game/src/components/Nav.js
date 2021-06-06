import React from 'react'

const Nav = ({score, top_score}) => {
  // const {score, top_score} = props;
  return(
      <div>
        <h2>Super Heroes Memory Game</h2>
        Score: {score}  Top Score: {top_score}
      </div>
  )
}
export default Nav
