import React from "react";
import Son from "./Son";

function UseProps() {
  function sayHello() {
    alert("Hello~");
  }

  // 模拟接收数据，一般数据格式都是数组内含多个对象。一般是通过Ajax接收的数据。
  const data = [
    {
      id: 0,
      date: new Date(2023, 4, 12, 10, 31),
      desc: "React",
      time: 60,
    },
    {
      id: 1,
      date: new Date(2022, 11, 11, 20, 44),
      desc: "JavaScript",
      time: 120,
    },
  ];

  /*通过map可以循环生成多个组件，推荐使用。
    备注，记得加key！如果item都需要接收，可以进行解构赋值。 */
  const logItemData = data.map((item) => (
    <Son key={item.id} {...item} sayHello={sayHello} />
  ));

  return (
    <div>
      <p style={{ fontSize: "20px" }}>
        组件可以从外部传递数据，在组件间，父组件可以通过props（属性）向子组件传递数据，props不限个数，通过对象的形式传给子组件。
      </p>
      {logItemData}
    </div>
  );
}

export default UseProps;
