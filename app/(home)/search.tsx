import { ScrollView, Separator, Text, View } from "tamagui";
import { useState } from "react";
import FuzzySearch from "@/components/FuzzySearch";
import { FuseResult } from "fuse.js";

type Result = {
  publishedOn: string;
  author: string;
  title: string;
  genre: string;
  cover: string;
  synopsis: string;
};

export default function search() {
  const [result, setResult] = useState<FuseResult<Result>[] | null>(null);
  return (
    <View flex={1} bg="#25292e" alignItems="center" justifyContent="center">
      <FuzzySearch onChange={setResult} />
      <ScrollView height="80%">
        {result?.map((book) => {
          return (
            <View bg="$white1" marginBlockEnd={2}>
              <Text>Author: {book?.item.author}</Text>
              <Text>Title: {book?.item.title}</Text>
              <Text>Published: {book?.item.publishedOn}</Text>
              <Text>Genre: {book?.item.genre}</Text>
              <Text>Cover: {book?.item.cover}</Text>
              <Text>Synopsis: {book?.item.synopsis}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
