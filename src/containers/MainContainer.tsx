import React, {useEffect, useState} from 'react';
import ContentContainer from './ContentContainer';

import{
  BrowserRouter as Router,
  Switch,
  Route, 
  NavLink,
  Link,
} from "react-router-dom";


interface IProps {

}

const MainContainer: React.FC<IProps> = ({}) => {
  const [festivals, festivalsUpdate] = useState([[{title: 'Loading....','link':'#'}]])

  useEffect(() => {
    fetch('/festivals')
    .then(res => {
      return res.json()
    })
    .then(data => {
      festivalsUpdate([...data])
    })
    .catch((err)=> {
      console.log(err)
    })
  },[])


  return (
    <React.Fragment>
      <article id="mainContainer">
        <Router>
          <Route path="/main">
            <ContentContainer festivals={festivals} />
          </Route>
        </Router>
      </article>
    </React.Fragment>
  )
}


export default MainContainer;


