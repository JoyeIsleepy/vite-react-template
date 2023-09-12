import React, { createElement, Suspense } from 'react'
import Loading from '@/components/Loading'

const LazyComponent = (element) => {
  return (
    <React.Suspense fallback={<Loading />}>
      {createElement(element)}
    </React.Suspense>
  )
}

export default LazyComponent

