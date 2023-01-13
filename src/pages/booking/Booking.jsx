import React from 'react'
import { List } from '../../components/list/'
import ChevronBottomIcon from '../../assets/chevronbottom.png'
import GridIcon from "../../assets/list.png"
import ListIcon from "../../assets/filter.png"
import carsData from "../../data/car.json";
import "./booking.css"
import { Card } from './card'

export const Booking = () => {
    return (
        <div className='booking-wrapper'>
            <h3 className="title">Booking</h3>
            <div className="d-flex align-items-center my-4">
                <div className="select-box model-date">
                    <span>New</span>
                    <img src={ChevronBottomIcon} className="icon" alt="model-date-icon" />
                </div>
                <div className="select-box model-type">
                    <span>Toyota</span>
                    <img src={ChevronBottomIcon} className="icon" alt="model-date-icon" />
                </div>
                <div className="display-model ms-auto">
                    <img src={GridIcon} className="icon-display" alt="display-grid-icon" />
                    <img src={ListIcon} className="icon-display" alt="display-grid-icon" />
                </div>
            </div>

            <List
                renderItem={(props) => (<Card key={props.id} {...props} />)}
                data={carsData.cars}
            />



        </div>
    )
}
