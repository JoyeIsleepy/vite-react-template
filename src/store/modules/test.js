import { observable, action, computed, makeObservable } from "mobx";

class TestStore {
  name = "test";
  sex = "男";
  num = 0;
  userObj = {
    name: "kangkang000",
    age: 23,
    token: "12345689",
  };

  constructor() {
    // mobx6 和以前版本这是最大的区别
    makeObservable(this, {
      name: observable,
      sex: observable,
      userObj: observable,
      num: observable,
      setName: action,
      setNum: action,
      titleName: computed,
    });
  }

  // 初始化
  /*   constructor() {
    // mobx6版本以后 必须得在初始化加makeObservable 
    makeObservable(this); 
}  */

  setName(v) {
    console.log("触发action");
    this.name = v;
  }
  setNum(v) {
    this.num++;
  }
  setUserObj(obj) {
    this.userObj = obj;
  }

  get titleName() {
    return this.name + "___111";
  }
  get userObject() {
    return this.userObj;
  }
}
export default new TestStore();
