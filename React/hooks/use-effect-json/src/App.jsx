import { useEffect, useState } from "react";

function App() {
  const [ResourceType, setResourceType] = useState("posts");
  const [Data, setData] = useState([]);

  // use effect for fetching information about the resource
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${ResourceType}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [ResourceType]);

  // Style definitions
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    padding: "20px",
  };

  const cardStyle = {
    border: "1px solid #e0e0e0",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    backgroundColor: "#fff",
    color: "#333",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1
        style={{
          textAlign: "center",
          textTransform: "capitalize",
          color: "#222",
        }}
      >
        {ResourceType}
      </h1>
      {/* {Data.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })} */}

      <div style={containerStyle}>
        {Data.map((item) => {
          if (ResourceType === "posts") {
            return (
              <div key={item.id} style={cardStyle}>
                <h2 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                  {item.title}
                </h2>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
                  {item.body}
                </p>
              </div>
            );
          } else if (ResourceType === "users") {
            return (
              <div key={item.id} style={cardStyle}>
                <h2 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                  {item.name}
                </h2>
                <p>
                  <strong>Email:</strong> {item.email}
                </p>
                <div
                  style={{
                    marginTop: "10px",
                    fontSize: "0.85rem",
                    color: "#666",
                  }}
                >
                  <strong>Address:</strong>
                  <div>
                    {item.address?.street}, {item.address?.suite}
                  </div>
                  <div>
                    {item.address?.city}, {item.address?.zipcode}
                  </div>
                </div>
              </div>
            );
          } else if (ResourceType === "comments") {
            return (
              <div key={item.id} style={cardStyle}>
                <p>
                  <strong>{item.name}</strong>
                </p>
                <p
                  style={{
                    fontStyle: "italic",
                    color: "#0066cc",
                    fontSize: "0.9rem",
                  }}
                >
                  {item.email}
                </p>
                <p style={{ marginTop: "10px" }}>{item.body}</p>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default App;
