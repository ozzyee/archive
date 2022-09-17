import styled from "styled-components";
import Colors from "../../configs/colors.json";

const keys = {
   todo: Colors.todo,
   process: Colors.process,
   review: Colors.review,
   done: Colors.done,
};

export const ProcessIcon = styled("div")`
   width: 20px;
   height: 20px;
   margin-left: auto;
   margin-right: auto;
   border-radius: 100%;

   background-color: ${({ theme }) =>
      (theme.process === "todo" && keys.todo) ||
      (theme.process === "process" && keys.process) ||
      (theme.process === "review" && keys.review) ||
      (theme.process === "done" && keys.done)};
`;
