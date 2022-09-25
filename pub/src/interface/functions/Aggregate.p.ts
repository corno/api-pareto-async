import * as pt from "pareto-core-types"
import { IStreamConsumer } from "../interfaces/StreamConsumer.p"

export type FAggregate = <PD, PT>(
    $: PD,
    $d: {
        connectToStream: (
            $: PD,
            $i: IStreamConsumer<PT>
        ) => void
    }
) => pt.AsyncValue<pt.Array<PT>>