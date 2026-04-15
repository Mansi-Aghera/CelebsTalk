
import BrowseCategory from "@/components/section/home/BrowseCategory";

import {  getCategories } from "@/services/api";




export default async function Page() {
  const [categories] = await Promise.all([
  getCategories(),
]);

  return (
    <>

      <BrowseCategory categories={categories} />
    </>
  );
}
