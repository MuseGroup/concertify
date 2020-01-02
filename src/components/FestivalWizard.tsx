import React from 'react';
// import ReactJson from "react-json-view";

interface IProps {
  festivals: any;
}

const FestivalWizard: React.FC<IProps>=({festivals}) => {
  const articles = festivals[0].map((el,i) => {
    return(
      <React.Fragment>
        <article className="pair">
          <img className="picture" src={el.picture}/>
          <a className="festivalEntry" key={i} href={el.link}> {el.title} </a>
        </article>
        <hr />
      </React.Fragment>)
  })

  return (
    <React.Fragment>
      <section className="festivals" id="festivalWizard">
        {articles}
      </section>
    </React.Fragment>
  );
}


export default FestivalWizard;


