import InputController from "./components/InputController";
import { topInputStore, bottomInputStore } from "./store";
import { autorun } from "mobx";

const App = () => {
  topInputStore.setData({
    value: "",
    left: [],
    right: [
      {
        text: "Очистить",
        onClick: () => {
          topInputStore.setValue("");
        },
      },
      {
        text: '"Hello world!"',
        onClick: () => {
          topInputStore.setValue("Hello world!");
        },
      },
    ],
  });

  bottomInputStore.setData({
    value: "",
    left: [
      {
        text: "Вывод числа",
        onClick: () => {
          const { value } = bottomInputStore;

          if (value && !isNaN(Number(value))) {
            alert(value);
          }
        },
      },
    ],
    right: [
      {
        text: "Вывод текста",
        onClick: () => {
          const { value } = bottomInputStore;

          if (value) {
            alert(value);
          }
        },
      },
    ],
  });

  autorun(() => {
    const { value } = bottomInputStore;
    bottomInputStore.left[0].enabled = !isNaN(Number(value)) && value !== "";
    bottomInputStore.right[0].enabled = value !== "";
  });

  return (
    <div className="app">
      <div className="inputs">
        <InputController props={topInputStore} />
        <InputController props={bottomInputStore} />
      </div>
    </div>
  );
};

export default App;
