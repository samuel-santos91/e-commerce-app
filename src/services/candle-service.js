import {
  doc,
  getDoc,
  getDocs,
  updateDoc,
  addDoc,
  deleteDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";

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

export const getAllCartItems = async () => {
  const collectionRef = collection(db, "cart");
  const querySnapshot = await getDocs(collectionRef);
  const list = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return list;
};

export const updateFavouriteStatus = async (id) => {
  try {
    const docRef = doc(db, "products", id);
    const querySnapshot = await getDoc(docRef);
    if (querySnapshot.exists()) {
      if (querySnapshot.data().favourite) {
        await updateDoc(docRef, {
          favourite: false,
        });
      } else {
        await updateDoc(docRef, {
          favourite: true,
        });
      }
    }
    const updatedDocSnapshot = await getDoc(docRef);
    return updatedDocSnapshot.data().favourite;
  } catch (e) {
    throw new Error("Document not found");
  }
};

export const updateChosenQuantity = async (id, symbol) => {
  try {
    const docRef = doc(db, "cart", id);
    const querySnapshot = await getDoc(docRef);
    if (querySnapshot.exists()) {
      if (symbol === "+") {
        await updateDoc(docRef, {
          quantityChosen: querySnapshot.data().quantityChosen + 1,
        });
      } else {
        await updateDoc(docRef, {
          quantityChosen: querySnapshot.data().quantityChosen - 1,
        });
      }
    }
  } catch (e) {
    throw new Error("Document not found");
  }
};

export const updateQuantityInStock = async (
  id,
  scentChosen,
  quantityChosen,
  quantityInStock
) => {
  try {
    const docRef = doc(db, "products", id);
    const querySnapshot = await getDoc(docRef);
    if (querySnapshot.exists()) {
      await updateDoc(docRef, {
        scent: {
          ...querySnapshot.data().scent,
          [scentChosen]: { quantity: quantityInStock - quantityChosen },
        },
      });
    }
  } catch (e) {
    throw new Error("Document not found");
  }
};

export const addToCart = async (data) => {
  try {
    const collectionRef = collection(db, "cart");
    const querySnapshot = await getDocs(collectionRef);
    const existingData = querySnapshot.docs.map((doc) => doc.data());
    const containCandle = existingData.some(
      (candle) => candle.idRef === data.idRef && candle.scent === data.scent
    );
    if (containCandle) return;
    await addDoc(collectionRef, data);
  } catch (e) {
    throw new Error("Something Went Wrong");
  }
};

export const deleteFromCart = async (id) => {
  try {
    const docRef = doc(db, "cart", id);
    await deleteDoc(docRef);
  } catch (e) {
    throw new Error("Document not found");
  }
};

export const subscribeToCartItems = (callback) => {
  const collectionRef = collection(db, "cart");
  const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
    const cartData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(cartData);
  });

  return unsubscribe;
};
