import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { ZoomIn } from "@material-ui/icons";

function CreateArea(props) {
  const [zoomIn, setZoomIn] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
    setZoomIn(false);
  }

  function handelOnClick() {
    setZoomIn(true);
  }

  return (
    <div>
      <form className="create-note">
        {zoomIn ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="content"
          onClick={handelOnClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={zoomIn ? 3 : 1}
        />
        <Zoom in={zoomIn}>
          <Fab onClick={submitNote}>
            <AddIcon style={{ paddingTop: 2 }} />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
