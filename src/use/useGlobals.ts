import {InjectionKey, Plugin} from 'vue';
interface Accessor {
  (key: string): Promise<any>
}
const acc_symbol: InjectionKey<Accessor> = Symbol()
export const useAsyncStoreProvider = (accessor: (key: string) => Promise<any>) => {
  return 
}

const asyncStoreProvider: Plugin = {
  install(vue, accessor: Accessor) {
    vue.provide(acc_symbol, accessor)
  }
}