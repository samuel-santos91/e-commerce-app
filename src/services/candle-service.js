import { doc, getDoc, getDocs, collection } from "firebase/firestore";

import { db } from "../config/firestore";

export const getAllCandles = async () => {
  const collectionRef = collection(db, "products");
  const querySnapshot = await getDocs(collectionRef);
  const list = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return list;
};

export const getCandleById = async (id) => {
  const docRef = doc(db, "products", id);
  const querySnapshot = await getDoc(docRef);
  if (!querySnapshot.exists()) {
    throw new Error("Document not found");
  }
  return { id: querySnapshot.id, ...querySnapshot.data() };
};
