import { getDocs, collection } from "firebase/firestore";

import { db } from "../config/firestore";

export const getAllCandles = async () => {
    const collectionRef = collection(db, 'products');
    const querySnapshot = await getDocs(collectionRef);
    const list = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log(list)
    // return 
  };