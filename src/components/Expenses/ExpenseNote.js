import './ExpenseNote.css';

const Note = (props) => {
    return (
        <div className="note">{props.note}</div>
    );
}

export default Note;