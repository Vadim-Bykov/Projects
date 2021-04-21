const url =
  'https://s3.eu-central-1.wasabisys.com/ghashtag/RNForKids/00-Init/data.json';

export const requestDataCards = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
