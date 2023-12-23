import { Helmet } from "react-helmet";
import PageWidth from "../../components/PageWidth";

const About = () => {
  return (
    <div>
        <Helmet>
        <title>About || ourTask</title>
      </Helmet>
      <PageWidth>about</PageWidth>
    </div>
  );
};

export default About;
