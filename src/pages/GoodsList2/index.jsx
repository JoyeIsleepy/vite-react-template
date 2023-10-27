import React, { useEffect, useRef ,useState} from 'react'
import { Button } from 'antd'
import styles from './index.module.scss'

export default function index() {

  const [codeText,setCodeText]=useState('')

  const openFile = async () => {
    const res = await window.showOpenFilePicker()
    console.log(res)
  }

  const showCode = async (item, index) => {
    const file = await item.fileHandle.getFile()
    const text = await file.text() 
    setCodeText(text) 
    // currentIndex.value = index
  }

  const openFiles = async () => { 
    const res = await window.showDirectoryPicker({})
    let fileList = []
    const detalAction = async (obj) => {
      if (obj.entries) {
        const dirs = obj.entries()
        for await (const entry of dirs) {
          if (entry[1].entries) {
            // 文件夹，递归处理
            detalAction(entry[1])
          } else {
            // 文件
            fileList.push({
              name: entry[0],
              path: obj.name,
              fileHandle: entry[1]
            })
          }
        }
      }
    }
    await detalAction(res)
    showCode(fileList[0], 0)
  }
  
  return (
    <div className={styles.goodBox}>
      <div>
        {/* showOpenFilePicker  默认只能打开一个文件，可以传入multiple:true打开多个文件 */}
        <Button onClick={openFile}>打开文件</Button>
        <Button onClick={openFiles}>打开文件夹</Button>
      </div>
      <div>
        <pre>
          <code className='lang-dart'>{codeText}</code>
        </pre>
      </div>
    </div>
  )
}
