import React, { useState } from 'react'
import AddEventForm from './AddEventForm'
import './Shedule.css'

import FullCalendar, { EventApi, DateSelectArg, EventClickArg, EventContentArg, formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'


// editable - редактирование
// selectable - Позволяет пользователю выделить несколько дней или временных интервалов, щелкая и перетаскивая.
//selectMirror -Нарисовывать ли событие «заполнитель» во время перетаскивания пользователя.
// dayMaxEvents - Максимальное количество событий за данный день, не считая ссылки + more. Остальные появятся в поповере.
const Shedule: React.FC = () => {

  const [currentEvents, setCurrentEvents] = useState([])

  let eventGuid = 0
  function createEventId() {
    return String(eventGuid++)
  }

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }


  const handleEventClick = (clickInfo: EventClickArg) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  const handleEvents = (events: EventApi[]) => {
  //  this.setState({
  //     currentEvents: events
  //   })
  }

  return (
    <div className='demo-app fc'>
      <div className='demo-app-main '>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          eventClick={handleEventClick}
          select={handleDateSelect}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          //передать с сервера
          events={[
            {
              title: "My repeating event",
              startRecur: '2020-06-22', // When recurrences of this event start
              endRecur: '2020-07-22', // When recurrences of this event end.
              startTime: '10:00',
              endTime: '14:00',
              daysOfWeek: [1, 5] // 0-Sunday. Repeat monday and thursday
            }
          ]}
          
        /* can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
        />
      </div>
    </div>
  )
}


export default Shedule;




