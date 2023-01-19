import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

console.log("Process env:", process.env);

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    useCdn: process.env.NODE_ENV === "production",
    apiVersion: "2021-03-25",
};

export const sanityClient = createClient(config);
export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);