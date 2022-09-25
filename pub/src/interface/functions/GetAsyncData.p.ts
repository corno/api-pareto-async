import * as pt from "pareto-core-types"

export type FGetAsyncData<T> = (
    $: string,
) => pt.AsyncValue<T>
