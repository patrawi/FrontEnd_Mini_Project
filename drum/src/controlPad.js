import React from 'react';

class ControlPad extends React.Component {
    constructor(props) {
        super(props);
       
    }
    render() {
        const  {type,handlePower,handleVolume,handleBank,value,power} = this.props
        return (
            <section>
                <div className = 'power'>
                    <h4>Power</h4>
                    <label className = 'switch'>
                        <input type = 'checkbox'  onClick = {handlePower}/>
                        <span className = 'slider'></span>
                    </label>
                </div>
                <div className = 'type'>
                    {power ? type : String.fromCharCode(160)}
                </div>
              
                <div className = 'ranging'>
                <input type="range" min="0" max="1" value={value} step = '0.01' className="range" id="myRange" onChange = {(event) => handleVolume(event)} />
                </div>
                <div className = 'power'>
                    <h4>Bank</h4>
                    <label className = 'switch'>
                        <input type = 'checkbox' onClick = {handleBank}/>
                        <span className = 'slider'></span>
                    </label>
                </div>
            </section>
        )
     }
    }

   

export default ControlPad;