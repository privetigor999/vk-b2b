import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { Form } from "../Form/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
import {
  DatePick,
  Dropdown,
  Input,
  MyButton,
  Notification,
  Plug,
} from "./../UI";

import { floors, towers, rooms, timesInterval } from "../../data";
import { MIN_TIME, MAX_TIME } from "../../data/timesInterval";
import { formSchema } from "../../utils/formSchema";
import { getFormattedDate } from "../../utils/getFormattedDate";
import { ISelect } from "../../types/types";

import "./App.scss";

export const App = () => {
  const [copyTimesInterval, setCopyTimesInterval] = useState<ISelect[] | null>(
    []
  );
  const [isShowPlug, setIsShowPlug] = useState(false);
  const [isShowAlert, setIsShowAlert] = useState(false);

  const {
    handleSubmit,
    getValues,
    control,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(formSchema),
  });

  const watcherDate = useMemo(() => {
    return getFormattedDate(watch("date"));
  }, [watch("date")]);

  const onSubmit = () => {
    const values = getValues();
    values.date = getFormattedDate(values.date.$d);
    console.log(JSON.stringify(values));
    setIsShowAlert(true);
  };

  useEffect(() => {
    const today = getFormattedDate(dayjs()).toString();

    // проверяем выбранную дату с сегодняшней
    if (watcherDate === today) {
      const currentHour = dayjs().hour();

      const findedIndex = timesInterval?.findIndex(
        (elem) => elem.value === currentHour.toString()
      );

      if (currentHour < MAX_TIME) {
        setIsShowPlug(false);
      } else {
        setIsShowPlug(true);
      }

      // если выбрана сегодняшняя дата, устанавливаем в списке только оставшееся время на сегодня. прошлое время выбрать нельзя!
      setCopyTimesInterval(timesInterval?.slice(findedIndex! + 1) ?? null);
      control._reset({ ...getValues(), timeHour: "" });
    } else {
      // если выбранный день не совпадает с сегодняшним, показываем весь список выбора времени в селекте
      setIsShowPlug(false);
      setCopyTimesInterval(timesInterval);
    }
  }, [watcherDate]);

  // таймер автоматического выключения alert
  useEffect(() => {
    let timerId: number;

    if (isShowAlert) {
      timerId = setTimeout(() => {
        setIsShowAlert(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isShowAlert]);

  return (
    <div className="app">
      <Typography variant="h4" align="center">
        Заполните форму
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Dropdown
          label="Выберите башню"
          control={control}
          name="tower"
          options={towers}
          helperText={errors?.tower?.message as string}
          error={!!errors.tower}
          fullWidth
        />
        <Dropdown
          label="Выберите этаж"
          control={control}
          name="floor"
          options={floors!}
          helperText={errors?.floor?.message as string}
          error={!!errors.floor}
          fullWidth
        />
        <Dropdown
          label="Выберите комнату"
          control={control}
          name="room"
          options={rooms!}
          helperText={errors?.room?.message as string}
          error={!!errors.room}
          fullWidth
        />
        <div className="app__datetime">
          <DatePick
            label="Выберите дату"
            control={control}
            name="date"
            helperText={errors?.date?.message as string}
            error={!!errors.tower}
          />
          {isShowPlug ? (
            <Plug error={!!errors.timeHour}>
              Бронь столов с {MIN_TIME} до {MAX_TIME} часов.
            </Plug>
          ) : (
            <Dropdown
              label={`Выберите время c ${MIN_TIME} до ${MAX_TIME}`}
              control={control}
              name="timeHour"
              options={copyTimesInterval!}
              helperText={errors?.timeHour?.message as string}
              error={!!errors.timeHour}
              style={{ flex: 1 }}
            />
          )}
        </div>

        <Input
          label="Комментарий"
          control={control}
          name="comment"
          multiline
          helperText={errors?.comment?.message as string}
          error={!!errors.comment}
          minRows={2}
          fullWidth
        />
        <div className="app__buttons">
          <MyButton type="reset" variant="outlined" control={control}>
            Очистить
          </MyButton>
          <MyButton type="submit" variant="contained">
            Отправить
          </MyButton>
        </div>
        {isShowAlert && (
          <Notification
            severity="success"
            onClose={() => {
              setIsShowAlert(false);
            }}
          >
            Данные в формате JSON в консоли
          </Notification>
        )}
      </Form>
    </div>
  );
};
