// 函数式组件，名称首字母必须大写
export default function JSXDemo() {
  const arr = ["Q1", "Q2", "Q3", "Q4"];
  return (
    <div className="babel">
      {/* 注意：1. {}中必须是js表达式，而不能放语句（if for）
      2. 在JSX中显示数组时，数组中每一个元素都需要设置一个唯一的key */}
      The list is <br />
      <ul>
        {arr.map((e) => (
          <li key={e}> {e} </li>
        ))}
      </ul>
    </div>
  );
}
