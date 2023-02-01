import { Delete } from "@mui/icons-material";

const Note = (props) => {

    const deleteNote =(event) =>{
        props.onDelete(props.id);
    };

    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button onClick={deleteNote}>
                <Delete />
            </button>
            
        </div>
    );
}

export default Note;