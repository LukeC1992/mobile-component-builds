import { useMemo, useState, type ReactNode } from "react";
import { View, Text, XStack, YStack, Separator } from "tamagui";
import {
  addDays,
  addMonths,
  format,
  isSameDay,
  isSameMonth,
  isSunday,
  isToday,
  previousSunday,
  startOfMonth,
  subMonths,
} from "date-fns";
import { es } from 'date-fns/locale'

export type CalendarPickerProps = {
  defaultDate?: Date;
  date?: Date;
  onChange: (value: Date) => void;
  allowPast?: boolean;
};

const today = new Date(Date.now());

export default function CalendarPicker(props: CalendarPickerProps): ReactNode {
  const {defaultDate, date: parentDate, onChange, allowPast} = props;
  const [date, setDate] = useState<Date>(defaultDate ?? today);

  const sixWeekArr = useMemo(() => {
    let firstOfMonth = startOfMonth(date);
    const firstSunday = isSunday(firstOfMonth)
      ? firstOfMonth
      : previousSunday(firstOfMonth);

    const month = Array.from(new Array(7 * 6)).map((_, i) =>
      addDays(firstSunday, i)
    );
    return month;
  }, [date]);

  return (
    <View width="80%" height="45%" bg="$white1">
      <YStack gap={10} marginBlockStart={10}>
        <XStack justifyContent="space-around" alignItems="center" className="monthSelect">
          <Text onPress={() => setDate(subMonths(date, 1))}>{"<"}</Text>
          <Text fontSize={20}>{format(date, "MMMM", {locale: es})}</Text>
          <Text onPress={() => setDate(addMonths(date, 1))}>{">"}</Text>
        </XStack>
        <Separator width="90%" alignSelf="center" />
        <YStack>
          <XStack
            justifyContent="space-between"
            alignItems="center"
            marginStart={10}
            marginEnd={10}
            className="weekdays"
          >
            {sixWeekArr.slice(0,7).map(day=>(
              <Text key={sixWeekArr.indexOf(day)} fontSize={20} fontWeight="bold">{format(day, "cccccc", {locale:es})}</Text>
            ))}
          </XStack>
          <XStack
            key="dates"
            width="100%"
            height="80%"
            marginBlockStart={5}
            flexWrap="wrap"
          >
            {sixWeekArr.map((day) => (
              <View
                width="14.28%"
                height="15.6%"
                alignItems="center"
                justifyContent="center"
                borderRadius={25}
                onPress={() => onChange(day)}
              >
                <Text
                  paddingBlock={1}
                  paddingInline={day.getDate() > 9 ? 2 : 7}
                  borderRadius={25}
                  borderColor="lightblue"
                  borderWidth={
                    parentDate && isSameDay(parentDate, day) ? "$1" : undefined
                  }
                  color={
                    isToday(day)
                      ? "blue"
                      : isSameMonth(day, date)
                      ? undefined
                      : "grey"
                  }
                >
                  {day.getDate()}
                </Text>
              </View>
            ))}
          </XStack>
        </YStack>
      </YStack>
    </View>
  );
}
