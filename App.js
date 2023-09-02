const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "heading1" }, "This is h1"),
  React.createElement("h2", { id: "heading2" }, "This is h2"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
