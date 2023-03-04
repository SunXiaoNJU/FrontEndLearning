/* 被观察者 */
class Observed {
  constructor() {
    // 观察者列表
    this.observerList = [];
  }
  /* 添加观察者 */
  addObserver(observer) {
    this.observerList.push(observer);
  }
  /* 移除观察者 */
  removeObserver(observer) {
    const index = this.observerList.findIndex((o) => o.name === observer.name);
    this.observerList.splice(index, 1);
  }
  /* 通知观察者 */
  notifyObserver(message) {
    const observers = this.observerList;
    observers.forEach((observer) => observer.notified(message));
  }
}
/* 观察者 */
class Observer {
  constructor(name, observed) {
    this.name = name;
    if (observed) {
      // 主动加入观察者列表
      observed.addObserver(this);
    }
  }
  /* 发出通知 */
  notified(message) {
    console.log(this.name, "got message:", message);
  }
}

const observed = new Observed();
// 观察者主动加入列表
const observer1 = new Observer("observer1", observed);
const observer2 = new Observer("observer2");
// 被观察者主动将观察者加入列表
observed.addObserver(observer2);
observed.notifyObserver("Hello observers!");
// 被观察者主动将观察者移出列表
observed.removeObserver(observer1);
observed.notifyObserver("Hello again!");
