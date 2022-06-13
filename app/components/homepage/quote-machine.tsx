import type {FC} from "react";
import {Box, limitWidth, textCenter} from "~/components/homepage/utils";

export const QuoteMachine: FC<{ quote: string }> = ({ quote }) => {
  return (
    <div className={limitWidth()}>
      <Box css={{ alignItems: "center" }} as="p" id="quote-machine" className={textCenter()}>
        {quote}
      </Box>
    </div>
  )
}
