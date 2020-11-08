import React, {Fragment, useState} from "react";

const EditTodo = ({todo}) => {
  
  const [description, setDescription] = useState(todo.description);
  
  return (
    <Fragment>
      {/* Button to Open the Modal*/}
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
        Edit
      </button>

      {/* The Modal*/}
      <div className="modal" id={`id${todo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">

            {/* Modal Header*/}
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>

            {/* Modal body*/}
            <div className="modal-body">
              <input type="text" className="form-control" value={description}/>
            </div>

            {/* Modal footer*/}
            <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-dismiss="modal">Edit</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditTodo;
