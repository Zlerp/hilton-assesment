import React, { Component } from 'react';
import Room from "./room";

class RoomsForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
                rooms: [
                    {
                        adults: 1,
                        children: 0,
                    },
                    {
                        adults: 1,
                        children: 0,
                    },
                    {
                        adults: 1,
                        children: 0,
                    },
                    {
                        adults: 1,
                        children: 0,
                    }
                ],

                enabledRoomIndex: 0,

        };


        this.updateEnabledRooms = this.updateEnabledRooms.bind(this);
        this.updateOccupants = this.updateOccupants.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    updateEnabledRooms(roomIndex){

        const newRooms = this.state.rooms.slice();

        if (roomIndex < this.state.enabledRoomIndex){
            let roomsToDefault = this.state.enabledRoomIndex;
            for (roomsToDefault; roomsToDefault > roomIndex; roomsToDefault--) {
                newRooms[roomsToDefault].adults = 1;
                newRooms[roomsToDefault].children = 0;
            }

        }
        this.setState({
            enabledRoomIndex: roomIndex,
            rooms: newRooms
        });
    }


    updateOccupants(value, isAdult, roomIndex){

        const newRooms = this.state.rooms.slice()

        if (isAdult) {
            newRooms[roomIndex].adults = value
        } else {
            newRooms[roomIndex].children = value
        }
        this.setState({rooms: newRooms})

    }


    renderRooms() {
        let self = this;
        return this.state.rooms.map(function (room, index){
           return( <Room
                        updateEnabledRooms={self.updateEnabledRooms}
                        enabled={self.state.enabledRoomIndex  >= index}
                        key={index}
                        index={index}
                        adults={room.adults}
                        children={room.children}
                        updateOccupants={self.updateOccupants}
                    />);
        });
    }

    handleSubmit(e){
        e.preventDefault;
        localStorage.setItem('rooms', JSON.stringify(this.state.rooms));
        localStorage.setItem('enabledRoomIndex', this.state.enabledRoomIndex);
    }


    componentDidMount() {
        let localrooms = JSON.parse(localStorage.getItem('rooms'));

        if (localStorage.getItem('rooms')) {

            this.setState({
                rooms: localrooms,
                enabledRoomIndex: localStorage.getItem('enabledRoomIndex')
            })
        }
    }

    render() {

        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="rooms-wrapper">
                            {this.renderRooms()}
                        </div>
                        <button className="form__button" type='submit'>Submit</button>
                    </form>
                </div>


                <style jsx>{`



                   .container {
                    margin: 0 auto;
                    max-width: 1024px;
                   }

                   .form__button {
                    margin-top:1rem;
                    padding: 0.4rem 0.8rem;
                   }
                   .rooms-wrapper {
                        display: flex;
                    }



                `}</style>
            </div>
        )
    }
}

export default RoomsForm