import React, { useEffect, useState, useMemo } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DndDrag from './DndDrag'
import { cloneDeep } from 'lodash-es'
import styles from './index.module.scss'

export default function index() {
  const [list, setList] = useState([
    {
      label: 'nodeOne',
      key: 11
    },
    {
      label: 'nodeTwo',
      key: 22
    },
    {
      label: 'nodeThree',
      key: 33
    },
    {
      label: 'nodeFour',
      key: 44
    },
    {
      label: 'nodeFive',
      key: 55
    }
  ])

  const [eles, setEles] = useState([
    {
      label: 'elementOne',
      key: 11
    },
    {
      label: 'elementTwo',
      key: 22
    },
    {
      label: 'elementThree',
      key: 33
    },
    {
      label: 'elementFour',
      key: 44
    },
    {
      label: 'elementFive',
      key: 55
    }
  ])

  const changePosition = (dragIndex, hoverIndex) => {
    let data = cloneDeep(dataSource)
    //这里将拖拽的数据修改位置
    const temp = data[dragIndex]
    data[dragIndex] = data[hoverIndex]
    data[hoverIndex] = temp
    //重新放入循环列表中
    // 注意这代码执行过于频繁不适宜传出数据
    setDataSource(data)
  }

  return (
    <div className={styles.dndBox}>
      <DndProvider backend={HTML5Backend}>
        <ul>
          {list.map((item, index) => {
            return (
              <DndDrag
                key={index}
                index={index}
                changePosition={changePosition}
              >
                <div
                  draggable='true'
                  onDragEnd={() => {
                    onChange && onChange(list)
                    // 通过 div 身上 onDragEnd 事件来判断拖拽结束将数据传出
                  }}
                >
                  <li key={index}>{item['label']}</li>
                </div>
              </DndDrag>
            )
          })}
        </ul>

        <ul>
          {eles.map((item, index) => {
            return <li key={index}>{item['label']}</li>
          })}
        </ul>
      </DndProvider>
    </div>
  )
}
