export function limitArray(array, limit) {
    if (!Array.isArray(array)) {
      throw new Error("Parameter pertama harus berupa array.");
    }
    if (typeof limit !== "number" || limit < 0) {
      throw new Error("Parameter kedua harus berupa angka positif.");
    }
    return array.slice(0, limit);
  }
  
  // Contoh penggunaan
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  const limitedData = limitArray(data, 5);
  
  console.log(limitedData); // Output: [1, 2, 3, 4, 5]
  