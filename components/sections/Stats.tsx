import { stats } from "@/content/site";

export function Stats() {
  return (
    <div className="stats">
      <div className="shell statgrid">
        {stats.map((s) => (
          <div className={s.wide ? "stat wide" : "stat"} key={s.label}>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
