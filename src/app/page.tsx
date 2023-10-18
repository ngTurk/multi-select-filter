import axios from "axios";
import { CATEGORIES_ENDPOINT } from "./common/config";

import MultiSelect from "./components/multi-select";

export default async function Home() {
  const { data } = await axios.get<string[]>(CATEGORIES_ENDPOINT);

  if (!data) {
    throw Error("Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz");
  }

  return (
    <main>
      <MultiSelect categories={data} />
    </main>
  );
}
