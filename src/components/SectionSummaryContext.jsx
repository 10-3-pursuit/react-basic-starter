import { useContext, useState } from "react";
import { SummaryContext } from "./Section";

const SectionSummaryContext = () => {
    const { summary } = useContext(SummaryContext)

    return (
        <div>Hello {summary}</div>
    )
}

export default SectionSummaryContext