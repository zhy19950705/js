class Subject {
  observers = [];
  addOberser(observer) {
    console.log(`${observer} is pushed`);
    this.observers.push(observer);
  }
  deleteObserver(observer) {
    console.log(`${observer} has deleted`);
    this.observers.splice(this.observers.indexOf(observer), 1);
  }
  notifyObserver() {
    console.log("notify all the observers", this.observers);
    this.observers.forEach((observer) => {
      observer.notify();
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  notify() {
    console.log(`${this.name} has been notified`);
  }
}

(function () {
  const subject = new Subject();
  const why = new Observer("why");
  const zhy = new Observer("zhy");
  subject.addOberser(why);
  subject.addOberser(zhy);
  subject.notifyObserver();
  subject.deleteObserver(zhy);
  subject.notifyObserver();
})();
