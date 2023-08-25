import { memo } from "react";
import { inject, observer } from "mobx-react";
// import { withRouter } from "react-router-dom";
// import { errorHunter } from '@/HOC/ErrorBoundary';

export default (component, stores = [], options = []) => { 
  // 注入store
  if (stores?.length > 0) {
    component = inject(...stores)(observer(component));
  }
  // 注入router
  /*  if (options.includes("withRouter")) {
    component = withRouter(component);
  } */
  // 组件缓存
  if (options.includes("memo")) {
    component = memo(component);
  }
  // 错误边界
  /*  if (options.includes('errorHunter')) {
    component = errorHunter(component);
  } */
  return component;
};
