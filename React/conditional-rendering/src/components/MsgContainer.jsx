function MsgContainer({ children }) {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "cyan",
        borderRadius: "5px",
        margin: "10px",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}

export default MsgContainer;
