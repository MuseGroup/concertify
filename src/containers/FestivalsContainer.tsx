import React, { useState } from 'react';
import FestivalWizard from '../components/FestivalWizard';


interface IProps {

}

//button for react native onPress = {festivals}
const FestivalsContainer: React.FC<IProps> = ({festivals}) => {
  const [tabs,tabsChange] = useState(1)

  let festivalsTab;
  if(tabs===1){
    festivalsTab=<FestivalWizard festivals={festivals}/>
  }

  return (
    <React.Fragment>
      <div id="festivals">
        <div className="tabs">
          <button onPress={{festivals}}/>
        </div>
      </div>
    </React.Fragment>
  );
}



export default FestivalsContainer;