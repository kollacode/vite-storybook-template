import { UnwrapRef, Ref, computed } from "vue"

export const useMutableProps = <P extends Record<string, any>>(props: P, emit: (event: `update:${keyof P & string}`, option: any) => void) => new Proxy(props, {
  get(target, key, receiver) {
    if(Reflect.has(target, key) && typeof key === "string") return computed({
      get() {
        return Reflect.get(target, key, receiver)
      },
      set(val) {
        emit(`update:${key}`, val)
        return val
      }
    })
    else return Reflect.get(target, key, receiver)
  }
}) as any as {[p in keyof P]: Ref<P[p]>}