import Fuse, { FuseResult } from "fuse.js";
import books from "../data/fake-books.json";
import { useEffect, useState } from "react";
import { Input, View } from "tamagui";
import debounce from 'lodash.debounce';

type Result = {
    publishedOn: string;
    author: string;
    title: string;
    genre: string;
    cover: string;
    synopsis: string;
}

export type FuzzyProps = {
  onChange: (value: FuseResult<Result>[] | null) => void;
};

const options = {
  includeScore: true,
  threshold: 0.35,
  keys: ["author", "title", "genre"],
};

const myIndex = Fuse.createIndex(options.keys, books)
const fuse = new Fuse(books, options, myIndex);

export default function FuzzySearch(props: FuzzyProps) {
  const { onChange } = props;
  const [search, setSearch] = useState<string>("");
  
  

  useEffect(()=>debounce(()=>{
    const result = fuse.search(search);
    console.log(result)
    onChange(result)
  }, 0),[search])


  return (
    <View flex={1} width="100%" alignItems="center" justifyContent="center">
      <Input placeholder="Search Author, Title, or Genre" value={search} onChangeText={setSearch} width="80%"/>
    </View>
  );
}
