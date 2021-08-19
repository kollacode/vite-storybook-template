import { UnwrapRef, Ref, computed } from "vue"
export type MutablePropKeys<P extends string, Q extends string> = 
  (P extends "value" ? Q extends "input" ? "value" : never : never) |
  (Q & `update:${P}` extends `update:${infer A}` ? A : never)
type MutableProps<P extends Record<string, any>, Q extends string> = {
  [p in MutablePropKeys<keyof P & string, Q>]: Ref<P[p]>
}
export const useMutableProps = <P extends Record<string, any>, Q extends string>(props: P, emit: (event: Q, option: any) => void): MutableProps<P,Q> => new Proxy(props, {
  get(target, key, receiver) {
    if(Reflect.has(target, key) && typeof key === "string") return computed({
      get() {
        return Reflect.get(target, key, receiver)
      },
      set(val) {
        // @ts-ignore Do both
        if(key === "value") emit("input", val)
        // @ts-ignore
        emit(`update:${key}`, val)
        return val
      }
    })
    else return Reflect.get(target, key, receiver)
  }
}) as any as {[p in keyof P]: Ref<P[p]>}