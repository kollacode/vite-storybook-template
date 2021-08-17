import { ref } from "vue";
let hasFetched = false
const eventsList = ref<string[]>([])
export const useEventsList = async () => {
  if(!hasFetched) {
    eventsList.value = await fetch("/events").then(e => e.json())
  }
  return eventsList
}

const useSave = () => {
  const save = async () => {}
  const hasSaved = ref(false)
  const isLoading =ref(false)
  const errors = ref(null)
}