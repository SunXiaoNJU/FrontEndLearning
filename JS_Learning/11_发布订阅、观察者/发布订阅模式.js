class Publisher {
  constructor(name, pubsub) {
    this.name = name;
    this.pubsub = pubsub;
  }

  publish(type, content) {
    this.pubsub.publish(type, content);
  }
}

class Subscriber {
  constructor(name, pubsub) {
    this.name = name;
    this.pubsub = pubsub;
  }
  // fn用来获取相应type中存入的message
  subscribe(type, fn) {
    this.pubsub.subscribe(type, fn);
  }
}

// 我称其为‘中转者’
class PubSub {
  constructor() {
    // 对象中按照键-值存储，值类型为array
    this.messages = {};
    this.listeners = {};
  }
  // 添加发布者
  publish(type, content) {
    const existContent = this.messages[type];
    if (!existContent) {
      this.messages[type] = [];
    }
    this.messages[type].push(content);
  }
  // 添加订阅者
  subscribe(type, fn) {
    const existListener = this.listeners[type];
    if (!existListener) {
      this.listeners[type] = [];
    }
    this.listeners[type].push(fn);
  }
  // 通知
  notify(type) {
    // 预设[]防止报错
    const messageArray = this.messages[type] || [];
    const fns = this.listeners[type] || [];
    fns.forEach((fn) => {
      for (const message of messageArray) {
        fn(message);
      }
    });
  }
}

// test
const TYPE_A = "JavaScript";
const TYPE_B = "HTML";
const TYPE_C = "CSS";

const pubsub = new PubSub();

const publisherA = new Publisher("publisherA", pubsub);
publisherA.publish(TYPE_A, "we are young");
publisherA.publish(TYPE_B, "the silicon valley");
const publisherB = new Publisher("publisherB", pubsub);
publisherB.publish(TYPE_A, "stronger");
const publisherC = new Publisher("publisherC", pubsub);
publisherC.publish(TYPE_C, "a brief history of time");

const subscriberA = new Subscriber("subscriberA", pubsub);
subscriberA.subscribe(TYPE_A, (res) => {
  console.log("subscriberA received", res);
});
const subscriberB = new Subscriber("subscriberB", pubsub);
subscriberB.subscribe(TYPE_C, (res) => {
  console.log("subscriberB received", res);
});
const subscriberC = new Subscriber("subscriberC", pubsub);
subscriberC.subscribe(TYPE_B, (res) => {
  console.log("subscriberC received", res);
});

pubsub.notify(TYPE_A);
pubsub.notify(TYPE_B);
pubsub.notify(TYPE_C);
