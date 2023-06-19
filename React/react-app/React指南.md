# React 指南

## 写在前面

由于 Markdown 格式的限制，自构建的组件直接书写会产生警报，所以我在每个前面都加了\

## 三个 API

- React.createElement()

  - React.createElement(type, [props], [...children])
  - 用来创建 React 元素
  - React 元素无法修改

- ReactDOM.createRoot()

  - createRoot(container, [, options])
  - 用来创建 React 的根容器，容器用来放置 React 元素

- root.render()
  - root.render(element)
  - 首次调用时，root 节点里所有的 DOM 元素都会被替换，后续每次调用都会使用 React 的 DOM 差分算法(DOM diffing algorithm)进行高效的更新。
  - 不会修改容器节点（只会修改容器的子节点）。可以在不覆盖现有子节点的情况下，将组件插入已有的 DOM 节点中。

## 虚拟 DOM

React 通过虚拟 DOM 将 React 元素和原生 DOM，进行映射，虽然操作的 React 元素，但是这些操作最终都会在真实 DOM 中体现出来。

虚拟 DOM 的好处：

1. 降低 API 的复杂度
2. 降低兼容问题
3. 提升性能（减少 DOM 的不必要操作）

## create-react-app 快速创建项目

命令行快速新建新的 react 项目
npx install create-react-app

## React hooks

### useState

在 react 中，当组件渲染完毕后，再修改组件中的变量，不会使组件重新渲染。
要使得组件可以收到变量的影响，必须在变量修改后对组件进行重新渲染。
当 state 发生改变时，react 会自动重新渲染，使得修改可以在页面中可以呈现出来。

import {useState} from "react";
const [state, setState] = useState("");

useState 返回一个数组，第一个是初始值，可以传入任何类型的参数；第二个是一个函数，用来修改初始值，会触发组件的重新渲染。

setState 的执行流程（函数组件）：setCount() ->dispatchSetDate() -> 先判断组件处于什么阶段（渲染阶段 -> 不会检查 state 值是否相同，会直接渲染
or 非渲染阶段 -> 检查 state 值是否相同，如果值不同，则对组件进行重新渲染）
这样就解释了为什么如果 setSate 被直接调用会出现死循环————组价一直处于渲染阶段并反复渲染。

注意：

1. 当 state 值是一个对象时，修改是使用新的对象去替换已有对象。
   可以使用 setState({...state, name="elk"}) 来实现浅赋值下的 state 修改（这里就是用新值 name 替换掉了原来 state 对象中的 name）。

2. 当通过 setState 方法修改 state 时，并不表示修改当前的 state，修改的是下一次渲染时 state 的值。

3. setState 触发组件的重新渲染时是异步的，改完后不会立刻生效，会在后续代码都执行完才会开始生效，多次相同的 setState 会合并，只生效最后一次。

4. 同样是由于 setState 是异步触发的，当需要用到旧的 state 值时，要当心出现节流的情形————在后续代码执行完毕前触发了 2 次以上的 setState（比如点击非常快导致多次触发），但由于旧的 state 没有改变过，因此这些 setState 只生效了一次，state 值也仅仅被修改了一次。
   为了避免这种情况的发生，可以向 setState 传递回调函数来修改 state 值————setState 回调函数的返回值将会成为新的 state 值。
   例如：setState((preState) => preState+1) 将旧的 state 作为参数传递，这样就可以保证每一次都是最新的 state！只要用到旧值就要这样写！

### useRef

react 操作原生 DOM 对象，直接从 React 处获取 DOM 对象

步骤：

1. 创建一个存储 DOM 的容器 -> 使用 useRef() 钩子函数，返回的是一个 JS 对象：{current:null}
   ps: 我们可以创建一个{current:null}对象来代替 useRef，缺点是每次重新渲染都会创建一个新的对象，而 useRef 的生命周期和组件一样的。

2. 将容器设置为想要获取 DOM 对象元素的 ref 属性，react 会将当前元素的 DOM 对象，设置为 ref 的 current 属性。

注意：

1. React 中 hook 只能用于函数式组件(React function component)或自定义钩子(custom React Hook)。

2. 钩子函数只能直接在函数组件中调用。

3. 在 React 中尽量少操作 DOM 对象，尽量只读少改，否则元素脱离 React 控制容易出现性能问题。

### useEffect

useEffect()需要一个函数作为参数，该函数会在组件渲染完毕后执行。

1. 在开发中，可以将会产生 副作用的代码 编写到 useEffect 的回调函数中，这样就可以避免这些代码影响到组件的渲染。
   ps：副作用，一般是导致页面循环渲染的一些代码，例如在组件中直接调用 setState。
2. 发生组件双向绑定的参数改变（组件重渲染）时，可以通过 useEffect 来执行与之有关的其他操作。

默认情况下（不传入依赖项） useEffect 在组件重新渲染后每一次都会执行。
useEffect()可以传入第二个 数组参数 作为依赖项，指定后只有依赖项 发生变化 时 useEffect 才会被触发。
通常我们会将 useEffect 中所有的变量都设置为依赖项，这样可以确保这些变量发生变化时会触发 useEffect 的执行（setState 可以不设置到依赖中）。
如果依赖项是一个空数组，则意味着 useEffect 只会在组件初始化时触发一次！

## 一些 react 知识

### react 严格模式

React.strictMode 开启 react 严格模式，在开发模式下，会主动重复调用一些函数，以使副作用体现。
以下函数会被调用两次：

1. 类组件的 constructor, render 和 shouldComponentUpdate 方法
2. 类组件的静态方法 getDrivedStateFromProps
3. 函数组件的函数体
4. 参数为函数的 setState
5. 参数为函数的 useState, useMemo, 或 useReducer

### props

以 <\Card /> 为例，有两种类型的 props：

1. 通过向 Card 后添加对象，然后在 Card.js 中通过 props 接收传过来的数组
2. 标签体，即 <\Card>something</\Card>，可以通过 props.children 获取组件的标签体内容
   注意：使用时 className 会被组件内预设的 className 覆盖，所以需要通过 props 在预设里追加：className={\`card ${props.className}\`}

### event

1. event 对象保存了当前事件触发时的所有信息，event.target 指向的是触发事件的对象，返回的就是 DOM 对象
   举例：获取表单项内容
   const descHandler = (event) => { setInputData(event.target.value) }

### 表单项操作

1. 获取表单内容: 通过 event 获取，event.target.value，数据存储在 state 中实现双向绑定。

2. 清空表单项：将表单数据存储在 state 中，然后将 state 设置为表单项的 value，这样表单项发生变化 state 会随着变化，反之亦然。如此称为双向绑定。
   这样就可以通过将 state 设置为空来实现清空表单项。

3. 删除日志：由于模块化所以数据和页面是绑定的，删除数据时页面也会对应删除，所以我们向每个表单项添加一个 × 的响应函数，
   根据 map 提供的 index 来定位对应的对象元素，然后一层一层将函数作为 props 传递下去，删除实现在父组件的数据层。

### 数据存储与使用

1. 当一个数据需要被多个组件使用时，可以将数据放入到这些组件共同的祖先元素中，这样多个组件就都可以访问了，这叫做 state 的提升。

2. 通过在父组件中设置一个回调函数传递给子组件，在子组件中通过 props 调用该函数，将数据作为参数传入，
   这样就可以在父组件中获取子组件中的数据，实现数据添加。

3. tips：数据一般存储在 state 中实现双向绑定。

### portal（传送门）

- 组件会默认作为父组件的后代渲染到页面中，但有些情况下会出现层级优先级的问题，比如弹窗、遮罩层等等。
- 通过 portal 可以将组件渲染到页面的指定位置。
- 使用方法：

1. 在 index.html 中添加一个新的元素
2. 修改组件的渲染方法：通过 ReactDOM.createPortal(jsx（修改前 return 的代码）, 新的元素)
   注意：import ReactDOM from "react-dom" 这里的 ReactDOM 容易引错，要注意！

### Fragment

React.Fragment 是一个专门作为父容器的组件，它只会将它里面的子元素直接返回，不会创建任何多余的元素。
<> </> 空标签，是 Fragment 的短语法，可以直接平替。

### store

在 src 中新建一个 store 文件夹用来存储数据。
Context 相当于一个公共的存储空间，我们可以将多个组件中都需要访问的数据统一存储到一个 Context 中，
这样无需通过 props 逐层传递，即可使组件访问到这些数据。

创建的具体例子详见 "./src/store/testContext.js"

使用方法：
以<\A>组件为例，想要获取<\App>中的数据

1. 在 A 中导入 context
2. 在 A 中使用 hook 函数 useContext() 获取到 data，参数即为导入的 context
3. 在 App 中使用<xxx.Provider value={data}> <\A> </xxx.Provider> ，获取数据的子组件 A 必须在其内部。(xxx 为 App 中引入的 context 的名称。)
4. 备注：通过 context 获取数据时遵从 就近原则

## UI

### ConfirmModel

写了一个确认框组件，可以复用。

### Backdrop（遮罩层）

用来遮挡组件外其余内容，仅允许操作遮罩层内部的组件。ConfirmModel 内使用了该组件。
