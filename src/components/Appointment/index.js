import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CONFIRM = "CONFIRM";
const CREATE = "CREATE";
const EDIT = "EDIT";
const SAVE = "SAVE";


export default function Appointment(props) {
  
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
     <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && props.interview && (<Show
          interviewer={props.interview.interviewer}
          student={props.interview.student}
          onEdit={() => transition(EDIT) }
          onDelete={() => transition(CONFIRM)}
        /> 
      )}
      {mode === CREATE && (<Form 
          interviewers={[]}
          onCancel={() => back()}
          onSave={ () => transition(SAVE)}
        />
      )}
    </article>
  );
}
