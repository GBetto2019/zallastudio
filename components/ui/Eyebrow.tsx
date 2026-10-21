/** Rótulo laranja acima do título da seção, com o traço da tag "— PERSONAL TRAINER —". */
export function Eyebrow({ children, centered = false }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <span className="eyebrow" style={centered ? { justifyContent: "center", display: "flex" } : undefined}>
      <i className="dash" aria-hidden="true" />
      {children}
      {centered && <i className="dash" aria-hidden="true" />}
    </span>
  );
}
