import { dataStore } from "../data";
import { ItemStore } from "./ItemStore";
function ListStore() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {dataStore.map((item) => {
        return <ItemStore key={item.id} element={item} />;
      })}
    </div>
  );
}

export { ListStore };