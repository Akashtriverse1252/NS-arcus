import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export const Numbers = () => {
    const [state, setState] = useState({turnover:1, workforce:1, states:1, cities:1});
  return (
    <>
                       <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({ isVisible }) => (
                    <div className='numberbanner'>
                      <div className='container'>
                        <div className='web-container'>
                        <div className="count">
                     
      <div className="App">
            <div className="countnum">
            {isVisible ? <CountUp start={(state.workforce===1) ? 1 : 500} end={500} duration={2} onEnd={()=> setState({ workforce:500 })} /> : <CountUp start={1} end={500} duration={0} />} +                
             <div className='labelcont'>
             Projects
        </div>
            </div>     
            
      </div>
      <div className="App">
            <div className="countnum">
            {isVisible ? <CountUp start={(state.workforce===1) ? 1 : 1.5} end={1.5} duration={2} separator=" " decimals={1}  decimal="."  onEnd={()=> setState({ workforce:1.5 })} /> : <CountUp start={1} end={1.5} duration={0} />}    
             <div className='labelcont'>
             million Cubic Mtr Concreting
        </div>
            </div>     
            
      </div>
      <div className="App">
            <div className="countnum">
            {isVisible ? <CountUp start={(state.workforce===1) ? 1 : 50} end={50} duration={2} onEnd={()=> setState({ workforce:49 })} /> : <CountUp start={1} end={50} duration={0} />}               
             <div className='labelcont'>
             years of Excellence
              </div>
            </div>     
            
      </div>
      
      </div>    
      </div> 
        
      </div>
      
                        </div>
                        
            )}
        </VisibilitySensor>
        
    </>
  )
}
