import React from 'react';
import SelectBox from './select-box'

const Room = (props) =>{

  const handleChange = (event, index) => {
    if (event.target.checked) {
        props.updateEnabledRooms(index);
    } else {
        props.updateEnabledRooms(index - 1);
    }
  };

    return (
      <div>
        <div className="card room">
          <div className="room__header">
              {
                props.index > 0 &&
                <input type="checkbox" onChange={() => handleChange(event, props.index)}
                       name="roomEnable"
                       checked={props.enabled}
                />
              }
            <h3 className="header__title">Room {props.index + 1}</h3>
          </div>

          <div className={`room__options ${props.enabled ? '' : 'disabled'}`}>
            <div className="room__option">
              <p>Adults</p>
              <p>(18+)</p>
              <SelectBox fieldName={`room-${props.index}__adults`}
                         updateOccupants={props.updateOccupants}
                         roomIndex={props.index} value={props.adults}
                         adult={true}
                         disabled={!props.enabled}/>
            </div>
           <div className='room__option'>
             <p>Children</p>
             <p>(0-17)</p>
             <SelectBox fieldName={`room-${props.index}__children`}
                        updateOccupants={props.updateOccupants}
                        roomIndex={props.index} value={props.children}
                        adult={false}
                        disabled={!props.enabled} />
           </div>
          </div>
        </div>


          <style jsx>{`

              .room {
                background-color: #ebebeb;
                padding:0.25rem;
                border-radius: 4px;
                margin-left: 0.5rem;
              }



              .disabled.room__options {
                display: flex;
                padding: 0.5rem;
                background-color: #ebebeb;
                pointer-events: none;

              }

              .room__options {
                display: flex;
                padding: 0.5rem;
                background-color: #fff;
              }

              .room__header {
                font-size: 0.8em;
                font-weight: bold;
                padding: 0.25rem 0;
                display: flex;
              }

              .room__header .header__title {
                margin: 0;
                margin-left: 0.25rem;

              }
              .room__option:not(:last-of-type) {
                margin-right: 1rem;
              }

              .room__option p {
                margin: 0.25rem 0;
                font-size: 0.75rem;
               }


    `}</style>
      </div>
    )
}

export default Room