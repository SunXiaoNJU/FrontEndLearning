import React from "react";

/* 通过React.createContext()创建需要存储的数据，其中传入的参数就是需要存储的数据。
然后export default 相应的context。 
最后，一般来说这里是不会指定数据的，数据都是由调用context的组件通过 
<xxx.Provider value={data}></xxx.Provider> value的{}内就是待传入的数据。
*/
// 注意，首字母必须大写！！
const TestContext = React.createContext();

export default TestContext;
