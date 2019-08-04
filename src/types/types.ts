
export interface Item {
     id: string, 
     name: string, 
     cost: number,
}

export interface CalcState {
    income1: 0,
    income2: 0,
    items: Item[],
}
export type AppState = {
}

export type ReduxState = {
    router?: Object,
    app: AppState,
    calc: CalcState,
    show: showState
  }

export type showState = {
    person1: Array<number>,
    person2: Array<number>,
    total: number,
    items: CalcState["items"];
}