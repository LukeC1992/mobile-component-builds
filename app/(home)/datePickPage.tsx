import { View} from "tamagui";
import DatePicker from "../../components/DatePicker";
import { useState } from "react";
import { parse } from "date-fns";

export default function AboutScreen() {
  const [date, setDate] = useState<Date>();
  return (
    <View flex={1} bg="#25292e" alignItems="center" justifyContent="center">
      <DatePicker date={date} onChange={setDate} defaultDate={parse("03/01/2025", "P", new Date())}></DatePicker>
    </View>
  );
}