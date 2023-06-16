// 函数式组件，组件首字母必须大写，是一个返回JSX的普通函数。快捷键：rfc
function JSXDemo() {
  const arr = ["Q1", "Q2", "Q3", "Q4"];
  return (
    <div
      className="babel"
      style={{ backgroundColor: "red", border: "yellowgreen 1px solid" }}
      onClick={alert("hhhhh")}
    >
      {/* 
      JSX使用注意事项：
      1. {}中必须是js表达式，而不能放语句（if for），表达式为空值、布尔值、undefined将不会显示。
      2. 在JSX中显示数组时，数组中每一个元素都需要设置一个唯一的key
      3. style中必须使用对象设置
      4. JSX中html标签小写开头，React组件大写开头
      5. JSX标签必须正确结束（自结束标签必须写/）
      */}
      The list is <br />
      <ul>
        {arr.map((e) => (
          <li key={e}> {e} </li>
        ))}
      </ul>
    </div>
  );
}

export default JSXDemo;
