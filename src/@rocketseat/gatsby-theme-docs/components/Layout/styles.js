import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

// custom
const Wrapper_Inner = styled.div`
  padding-left: 280px;
  transition: transform 0.5s;

  @media (max-width: 780px) {
    padding-left: 0;
    transform: translate3d(
      ${({ isMenuOpen }) => (isMenuOpen ? '240px' : '0')},
      0,
      0
    );
  }
`;
const Top_Right_Corner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
`;

// Centers in mobile at the bottom:
const Bottom_Right_Corner = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  @media (max-width:780px) {
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
`;

const Github_Logo = () =>
  <span dangerouslySetInnerHTML={{__html: '<svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>'}} />;

const NPM_Logo = () => 
  <span dangerouslySetInnerHTML={{__html: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="65px" height="70px" viewBox="0 0 18 7"><path fill="#000" d="M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z"/><polygon fill="#FFFFFF" points="1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1 "/><path fill="#FFFFFF" d="M6,1v5h2V5h2V1H6z M9,4H8V2h1V4z"/><polygon fill="#FFFFFF" points="11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1 "/></svg>' }} />;

export const Wrapper = (props) => {
  return (
    <Wrapper_Inner isMenuOpen={props.isMenuOpen}>
      { props.children }
      <Top_Right_Corner>
        <a href="https://www.npmjs.com/package/botmation" target="_blank" aria-label="View module on NPM" style={{position: 'relative', right: '120px'}} >
          <NPM_Logo />
        </a>
        <a href="https://github.com/mrWh1te/Botmation" class="github-corner" aria-label="View source on GitHub" target="_blank">
          <Github_Logo />
        </a>
      </Top_Right_Corner>
      <Bottom_Right_Corner>
        <img alt="Baby Bot" src="/baby_bot.png" width="100" />
      </Bottom_Right_Corner>
    </Wrapper_Inner>
  );
}


//
// Original
export const Main = styled.main`
  padding: 0 40px;
  height: 100%;

  ${({ disableTOC }) =>
    !disableTOC &&
    css`
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      position: relative;

      @media (max-width: 1200px) {
        flex-direction: column;
      }
    `}

  @media (max-width: 780px) {
    padding: 24px 24px 48px 24px;
  }
`;

export const Children = styled.div`
  width: 100%;
  min-width: 75%;
  max-width: 75%;

  @media (max-width: 1200px) {
    min-width: 100%;
    max-width: 100%;
  }

  ${({ hasTitle }) => !hasTitle && 'padding-top: 40px'};
`;

export const Title = styled.h1`
  padding: 40px 0 0 40px;

  @media (max-width: 780px) {
    padding: 24px 0 0 24px;
  }
`;
