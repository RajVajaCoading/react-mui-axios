
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// import "./App.css";

const data = [
  {
    id: "item-1",
    content: "Item-1",
  },
  {
    id: "item-2",
    content: "Item-2",
  },
  {
    id: "item-3",
    content: "Item-3",
  },
  {
    id: "item-4",
    content: "Item-4",
  },
  {
    id: "item-5",
    content: "Item-5",
  },
  {
    id: "item-6",
    content: "Item-6",
  },
  {
    id: "item-7",
    content: "Item-7",
  },
  {
    id: "item-8",
    content: "Item-8",
  },
  {
    id: "item-9",
    content: "Item-9",
  },
];

const reorder = (list, startIndex, endIndex) =>{
    const result  = Array.from(list);
    const [removed] = result.splice(startIndex,1);
    result.splice(endIndex,0,removed);
    
    return result; 
}

function Example(){

    const [item,setItem] = useState([]);

    useEffect(()=>{
        setItem(data);
    },[]); 

    const onDragEnd=(result)=>{
        console.log("first",result)
        if(!result.destination){
            return;
        }
        const reorderedItem = reorder(item, result.source.index,result.destination.index);
        setItem(reorderedItem);
    }
    return(
        <div>
        <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="this-is-demo" >
                {(provided, snapshot) => (
                   <div  ref={provided.innerRef} {...provided.droppableProps} >
                            {
                                item.map((item,index)=> (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided)=>(
                                            <div ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            >
                                                {item.content}
                                            </div>
                                        )}

                                    </Draggable>
                                ))
                            }
                             {provided.placeholder}
                        </div>
                )}
                </Droppable>;
        </DragDropContext>
        </div>
    )
}


export default Example;