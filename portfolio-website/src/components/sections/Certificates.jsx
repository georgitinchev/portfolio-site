import React from "react";
import styled from "styled-components";
import { certificates } from "../../data/constants";
import CertificateCard from "../cards/CertificateCard";
import EarthCanvas from "../canvas/Earth";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0 80px 0;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
`;

const CanvasWrapper = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  margin-top: 40px;
`;

const Certificates = () => {
  return (
    <Container id="Certificates">
      <Wrapper>
        <Title>Certificates</Title>
        <Desc>
          Professional certifications and achievements that demonstrate my expertise and commitment to continuous learning.
        </Desc>

        <CardGrid>
          {certificates.map((certificate, index) => (
            <CertificateCard key={`certificate-${index}`} certificate={certificate} />
          ))}
        </CardGrid>
        <CanvasWrapper>
          <EarthCanvas />
        </CanvasWrapper>
      </Wrapper>
    </Container>
  );
};

export default Certificates; 