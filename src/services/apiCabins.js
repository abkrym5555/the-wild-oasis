import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);

    throw new Error("cant get cabins data");
  }
  //promise
  return data;
}

export async function creatEditCabins(newCabin, id) {
  //https://szvycgnfsngawjoilcun.supabase.co/storage/v1/object/public/cabin-imags/cabin-001.jpg

  //check for image
  const hasSupbaseUrl = newCabin.imag?.startsWith(supabaseUrl);

  const imagName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasSupbaseUrl
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-imags/${imagName}`;

  let query = supabase.from("cabins");

  //creat new cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //edit cabin
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);

    throw new Error("cant creat the cabin");
  }

  //upload
  const { error: uploadImgErr } = await supabase.storage
    .from("cabin-imags")
    .upload(imagName, newCabin.image);
  //if no image than delet the cabin it make
  if (uploadImgErr) {
    await supabase.from("cabins").delete().eq("id", newCabin.id);

    console.error(uploadImgErr);
    throw new Error(
      "Cabin image can not be upload and the cabin was not created"
    );
  }

  return data;
}

export async function deleteCabins(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);

    throw new Error("cant delete cabins data");
  }
  //promise
  return data;
}
