import s from "./ColorPicker.module.css";

function ColorPiker({ options }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Color Picker</h2>
      <div>
        {options.map(({ label, color }) => (
          <span
            key={label}
            className={s.option}
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ColorPiker;
