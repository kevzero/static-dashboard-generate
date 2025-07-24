import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Widget from '../components/Widget';
import ChartWidget from '../components/ChartWidget';
import KPIWidget from '../components/KPIWidget';

export default function Editor(){
 const [widgets, setWidgets] = useState([{id:'1',type:'KPI'},{id:'2',type:'Chart'}]);
 const onDragEnd = (result) => {
  if (!result.destination) return;
  const items = Array.from(widgets);
  const [reorderedItem] = items.splice(result.source.index, 1);
  items.splice(result.destination.index, 0, reorderedItem);
  setWidgets(items);
 };
 return (
  <div className='p-6 bg-gray-100 min-h-screen'>
    <h1 className='text-3xl font-bold mb-4'>Dashboard Editor</h1>
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='widgets'>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className='grid grid-cols-2 gap-4'>
            {widgets.map((widget, index) => (
              <Draggable key={widget.id} draggableId={widget.id} index={index}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {widget.type === 'KPI' && <KPIWidget title='Revenue' value='$12,000'/>}
                    {widget.type === 'Chart' && <ChartWidget />}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  </div>
 );
}