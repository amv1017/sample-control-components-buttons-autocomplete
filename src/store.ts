import InputControllerStore from "./store/InputControllerStore";
import ACControllerStore from "./store/ACControllerStore";

const topInputStore = new InputControllerStore();
const bottomInputStore = new InputControllerStore();

const topACStore = new ACControllerStore();
const bottomACStore = new ACControllerStore(10);

export { topInputStore, bottomInputStore, topACStore, bottomACStore };
