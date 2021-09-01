export namespace DisplayFilter {
  export interface Criteria {
    startDate?: Date
    endDate?: Date
    textQuery?: string
    page?: number
    limit?: number
  }
  export type vModelEmits = {[c in keyof Criteria as `update:${c}`]: (val: Criteria[c]) => void}
  export interface FilterFn<S> {
    (row: S, criteria: Criteria): boolean
  }
}