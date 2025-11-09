"use client";
import { makeStore } from '@/redux/store';
import { useRef } from 'react'
import { Provider } from 'react-redux';

export default function StoreProvider({ children }) {

  // Sử dụng useRef để đảm bảo rằng redux store chỉ được khởi tạo 1 lần duy nhất khi component được rerender lần đầu tiên ở phía client
  const storeRef = useRef(null);


  // Tạo store mới nếu chưa có
  // makeStore() tạo store cho mỗi request trên server
  // storeRef.current đảm bảo trên client, store chỉ khởi tạo 1 lần duy nhất 
  if(!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
