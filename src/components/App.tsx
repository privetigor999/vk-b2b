import { FC } from "react";
import { Dropdown } from "./UI/Dropdown/Dropdown";
import { Form } from "./Form/Form";
import { PickerData } from "./UI/PickerData/PickerData";
import { TextArea } from "./UI/TextArea/TextArea";
import { Button } from "./UI/Button/Button";

import { towers, floors, rooms } from "../data";

export const App: FC = () => {
  return (
    <div>
      <h1>Заполните форму</h1>
      <Form>
        <Dropdown label="Выберите башню" options={towers} />
        <Dropdown label="Выберите этаж" options={floors} />
        <Dropdown label="Выберите комнату" options={rooms} />
        <PickerData title="Выберите день" />
        <TextArea title="Укажите комментарий" />
        <div>
          <Button text="Сбросить" type="reset" />
          <Button text="Отправить" type="submit" />
        </div>
      </Form>
    </div>
  );
};
