import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function index() {
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(() => {
    //使用 Array.from(searchParams.entries()) 将迭代器对象转换为数组，以便查看 URLSearchParams 中的参数和值。
    const entriesArray = Array.from(searchParams.entries())
    console.log(entriesArray, 'entriesArray')
    /* 
    [
      [
          "id",
          "zzk"
      ],
      [
          "age",
          "25"
      ]
    ]
    */
    // Iterate through keys
    for (const key of searchParams.keys()) {
      console.log(key)
    }
  }, [])
  return <div>GoodsList</div>
}
