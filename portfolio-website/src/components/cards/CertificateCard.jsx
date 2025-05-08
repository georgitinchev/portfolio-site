import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 6px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(23, 92, 230, 0.25) 0px 8px 32px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 8px;
  object-fit: contain;
  background: white;
  padding: 4px;
  @media only screen and (max-width: 768px) {
    height: 32px;
    width: 32px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Issuer = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-top: 8px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const CredentialId = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const VerificationLink = styled.a`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  margin-top: 4px;
  &:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const CertificateCard = ({ certificate }) => {
  return (
    <Card>
      <Top>
        <Image src={certificate?.img} alt={certificate?.issuer} />
        <Body>
          <Title>{certificate?.title}</Title>
          <Issuer>{certificate?.issuer}</Issuer>
          <Date>{certificate?.date}</Date>
        </Body>
      </Top>
      <Description>
        {certificate?.desc && <Span>{certificate.desc}</Span>}
        {certificate?.credentialId && (
          <>
            <br />
            <CredentialId>
              <b>Credential ID:</b> {certificate.credentialId}
            </CredentialId>
          </>
        )}
        {certificate?.credentialUrl && (
          <VerificationLink href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer">
            Verify Certificate
          </VerificationLink>
        )}
      </Description>
    </Card>
  );
};

export default CertificateCard; 