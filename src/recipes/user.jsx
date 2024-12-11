import React from 'react';
import {RatingEvent,RatingNotifier} from './gameNotifier';

export function User(props){
    const userName=props.userName;
    const [events,setEvent]=React.useState([]);
    React.useEffect(()=>{
        RatingNotifier.addHandler(handleRatingEvent);
        return ()=> {
            RatingNotifier.removeHandler(handleRatingEvent);
        };
    });

    function handleRatingEvent(event){
        setEvent([...events,event]);
    }

    function createMessageArray(){
        const messageArray=[];
        for (const[i,event] of events.entries()){
            let message='unknown';
            if (event.type === RatingEvent.End){
                message=`added ${event.value.name}`;
            }else if (event.type===RatingEvent.System){
                message=event.value.msg;
            }

            messageArray.push(
                <div key={i} className='event'>
                    <span className={'user-event'}>{event.from.split('@')[0]}</span>
                    {message}
                </div>
            );
        }
        return messageArray;
    }

    return (
        <div className='users'>
            User
            <span className='user-name'>{userName}</span>
            <div id='user-messages'>{createMessageArray()}</div>
        </div>
    );
}