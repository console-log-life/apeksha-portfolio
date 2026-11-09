const GlassPanel = ({ as: Tag = "div", className = "", children, ...props }) => (
  <Tag className={`glass-panel ${className}`} {...props}>
    {children}
  </Tag>
);

export default GlassPanel;
