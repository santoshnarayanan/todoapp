import { Delete } from "@mui/icons-material";

const Note = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <Delete />
        </div>
    );
}

export default Note;