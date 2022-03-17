import GridLoader from "react-spinners/GridLoader";

import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {
    return ( 
        <div className="mt-96">
            <GridLoader color={"#000000"} css={override} size={15} />
        </div>
     );
}
 
export default Loading;