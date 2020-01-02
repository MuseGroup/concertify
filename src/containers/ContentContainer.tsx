import * as React from "react";
import FestivalsContainer from './FestivalContainer'

export interface IFestivals{

}


const ContentContainer: React.FC<IFestivals> = ({festivals}) =>{
  return (
    <React.Fragment>
      <div id="content">
        <FestivalsContainer festivals= {festivals}/>
      </div>
    </React.Fragment>
  ); 
}

export default ContentContainer;