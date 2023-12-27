export type Data = {
  status: string
}

export type FetchData<T> = {
  data: T | undefined
  isLoading: boolean
  hasError: Error | null
}
