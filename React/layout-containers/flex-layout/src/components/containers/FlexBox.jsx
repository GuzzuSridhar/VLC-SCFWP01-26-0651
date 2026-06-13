// A Resuable React flexbox component with configurable properties
// no / minimal css required for css

const FlexBox = ({
  children,

  // flex container properties
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  wrap = "nowrap",

  // size
  width = "auto",
  height = "auto",

  // spacing
  padding = "0px",
  margin = "0px",
  gap = "0px",

  //extra Styiling
  background = "transperent",
  border = "none",
  borderRadius = "0px",
  style = {},
  className = "",

  // Flex Item properties
  flex = "0 1 auto",
  grow,
  shrink,
  basis,

  // position
  display = "flex",

  ...props
}) => {
  const flexStyle = {
    display,
    // container properties
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexwrap: wrap,
    gap,

    // size
    width,
    height,

    // spacing
    padding,
    margin,

    // extra
    background,
    border,
    borderRadius,

    // item styles
    flex,
    flexGrow: grow,
    flexShrink: shrink,
    flexBasis: basis,

    ...style,
  };
  return (
    <div className={className} style={flexStyle} {...props}>
      {children}
    </div>
  );
};

export default FlexBox;
