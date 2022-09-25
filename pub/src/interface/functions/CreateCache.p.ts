import * as pt from "pareto-core-types"

import { FGetAsyncData } from "./GetAsyncData.p"

export type FCreateCache = <T>(
    $d: {
        getData: ($: string) => pt.AsyncValue<T>
    }
) => FGetAsyncData<T>