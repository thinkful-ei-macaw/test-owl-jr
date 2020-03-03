import React from "react"
import Card from './Card'


function List(props) {
  return (
    <section className='participantList'>
      {props.participants.map(person => {
        return (
          <Card
            name={person.name}
            imgsrc={person.avatar}
            inSession={person.inSession}
          />
        );
      })}
    </section>
  );
}

export default List;