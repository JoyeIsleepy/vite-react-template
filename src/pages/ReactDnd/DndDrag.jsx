import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

// dnd拖拽排序
export default ({ children, index = '', changePosition = () => {}, ...props }) => {
  const dragRef = useRef(null);

  // 因为没有定义收集函数，所以返回值数组第一项不要
  const [, drop] = useDrop({
    accept: 'DragDropBox', // 只对useDrag的type的值为DragDropBox时才做出反应
    hover: (item, monitor) => {
      if (!dragRef.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return; // 如果回到自己的坑，那就什么都不做
      changePosition(dragIndex, hoverIndex); // 调用传入的方法完成交换
      item.index = hoverIndex; // 将当前当前移动到Box的index赋值给当前拖动的box，不然会出现两个盒子疯狂抖动！
    },
  });

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'DragDropBox',
    item: { type: 'DragDropBox', index },
    collect: monitor => ({
      isDragging: monitor.isDragging(), // css样式需要
    }),
  }));

  return (
    // ref 这样处理可以使得这个组件既可以被拖动也可以接受拖动
    <div ref={drag(drop(dragRef))} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div {...props}>{children}</div>
    </div>
  );
};
