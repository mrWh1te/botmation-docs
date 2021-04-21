import styled from '@emotion/styled';
import React from 'react';

import BabyBot from './../botmation/baby-bot';
import GithubLogo from './../botmation/github-logo';
import NPMLogo from './../botmation/npm-logo';

// custom (botmation docs specific):
const BabyBotContainer = styled.div`
  position: fixed;
  z-index: 10;
  right: 0;
  bottom: 0;
`;
const ContainerInner = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;

  display: grid;
  grid-template-columns: 280px calc(100% - 320px);
  grid-auto-flow: row;
  grid-gap: 40px;

  @media (max-width: 780px) {
    padding: 24px;
    grid-template-columns: 100%;
  }
`;
const ExtraLogosContainer = styled.div`
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
`;

// shadowing:
export const Container = (props) => {
  return (
    <>
      <ContainerInner>
        <ExtraLogosContainer>
          <a href="https://www.npmjs.com/org/botmation" target="_blank" rel="noreferrer" aria-label="View @botmation packages on NPM" style={{position: 'relative', right: '120px'}} >
            <NPMLogo />
          </a>
          <a href="https://github.com/mrWh1te/Botmation" className="github-corner" aria-label="View source on GitHub" target="_blank" rel="noreferrer">
            <GithubLogo />
          </a>
        </ExtraLogosContainer>

        { props.children }

        <BabyBotContainer>
          <BabyBot />
        </BabyBotContainer>
      </ContainerInner>
    </>
  )
}

export const Main = styled.main`
  height: 100%;
  padding-top: 36px;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  position: relative;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 780px) {
    padding-top: 0;
  }
`;

export const Children = styled.div`
  width: 100%;
  max-width: calc(75% - 64px);
  padding-right: 64px;

  @media (max-width: 1200px) {
    max-width: 100%;
    padding-right: 0;
    order: 3;
  }
`;