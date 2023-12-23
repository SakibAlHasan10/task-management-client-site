import { Draggable, Droppable } from "react-beautiful-dnd";

const StoreLeft = ({ name, data, id }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <div className="store-container">
            <h3 className="pb-2 border-b border-white">
              {data?.TaskTitle}
            </h3>
          </div>
          <div className="items-container">
            {/* {data.map((item, index) => (
                <Draggable draggableId={item.id} index={index} key={index}>
                    {(provided)=>(
                        <div className="item-container" {...provided.dragHandleProps}
                        {...provided.draggableProps} ref={provided.innerRef} >
                        <h4>{item.name}</h4>
                      </div>
                    )}
                </Draggable>
            ))} */}
          {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default StoreLeft;
