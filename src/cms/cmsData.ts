import { createClient } from "contentful";

function getClient() {
  const id = process.env.CONTENTFUL_SPACE_ID;
  const token = process.env.CONTENTFUL_ACCESS_TOKEN;
  if (!id || !token) {
    throw new Error("CONTENTFUL_SPACE_ID & CONTENTFUL_ACCESS_TOKEN must be filled in .env");
  }

  return createClient({
    space: id,
    accessToken: token,
  });
}

export function getCMSEntry(id: string | undefined) {
  if (!id) {
    throw new Error(`Environmental variable ${id} must not be empty`);
  }
  const entry = getClient().getEntry(id);
  if (!entry) {
    throw new Error(`CMS entry ${id} was not found!`);
  }
  return entry;
}
