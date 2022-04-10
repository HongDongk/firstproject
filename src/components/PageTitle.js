import { Helmet } from "react-helmet-async";

function PageTitle({ title1 }) {
  return <Helmet> <title>{title1} || Petmory</title> </Helmet>;
}


export default PageTitle;