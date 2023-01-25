import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { media } from "utils/Media";
import { FaqWrapper } from "./FaqWrapper";
import { FaqInfo } from "./FaqInfo";
import { MaxWidth } from "components/global";

const FaqsStyles = styled.section`
background-color: var(--grey);
  .wrapper {
    padding: 2rem 0;
    
    @media ${media.md} {
      display: grid;
      grid-template-columns: 30% 1fr;
      grid-gap: 3.5rem;
    }
    @media ${media.lg} {
      grid-template-columns: 25% 1fr;
    }
    @media ${media.xl} {
      grid-template-columns: 18% 1fr;
    }
  }
`;
const Faqs = () => {
  const { faqs } = useStaticQuery(graphql`
    query FaqQuery {
      faqs: allFaqsJson {
        nodes {
          category
          questions {
            question
            answer
          }
        }
      }
    }
  `);
  const categories = faqs.nodes.map((category) => category.category);
  const [activeTab, setActiveTab] = useState(categories[0]);
  return (
    <FaqsStyles>
      <MaxWidth>
        <section className="wrapper">
          <FaqInfo
            data={categories}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            />
          <FaqWrapper data={faqs.nodes} activeTab={activeTab} />
        </section>
      </MaxWidth>
    </FaqsStyles>
  );
};

Faqs.propTypes = {
  data: PropTypes.any,
};

export default Faqs;
