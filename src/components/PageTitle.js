import { PropTypes } from "prop-types";
import { Helmet } from "react-helmet-async";

function PageTitle({ title1 }) {
  return <Helmet> <title>{title1} | Instaclone</title> </Helmet>;
}

PageTitle.propTypes = {
  title1: PropTypes.string.isRequired,
};

export default PageTitle;