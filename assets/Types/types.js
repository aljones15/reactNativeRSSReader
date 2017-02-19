export type RssListProps = {
  items: Object,
  loading: boolean,
  valid: boolean,
  selectItem: (item: Object) => (e: Object) => void,
  refresh: () => (dispatch: Function) => void
}

export type PaginateProps = {
  skip: number,
  next: (skip: number) => () => void,
  previous: (skip: number) => () => void
}
