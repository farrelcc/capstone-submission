import { create } from 'zustand'

export const useStore = create((set) => ({
  bears: 0,
  dataUser : {
    bahari: 5,
    budaya: 5,
    cagar: 5,
    pusat: 2.5,
    taman: 4.0,
    ibadah: 5.0,
    lat: -7.799438469931893,
    lon: 110.36847049152439,
    radius: 10,
  },
  setDataUser: (data) => set({ dataUser: data }),
  setLocationUser: (lat, lon) => set((state) => ({
    dataUser: {
      ...state.dataUser, // Menjaga properti lain tetap sama
      lat: lat,         // Mengubah latitude
      lon: lon,         // Mengubah longitude
    }
  })),
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))