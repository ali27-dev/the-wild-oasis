import supabase, { supabaseUrl } from "./supabase";

async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Canins could not be loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin?.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // https://sqwnldoxpepieuawjvop.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  // 1. Cerate Cabin
  let query = supabase.from("cabins");

  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // Edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Canin could not be created");
  }

  // Duplicate
  if (hasImagePath) return data;

  // 2. Uplaod file
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  console.log(storageError);
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
  }
  if (error) {
    console.error(error);
    throw new Error(
      "Canin could not be u[laod iamge and the cabin was not careted"
    );
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Canin could not be deleted");
  }
  return data;
}

export default getCabins;
