import React from 'react';
import styled from '@emotion/styled';

// import gear from '../assets/settings-24px.svg';

/**
 * @description   Has Background Image
 */

const VersionWrapper = styled.sup`
  font-size: .8rem;
`;

/**
 * @description   Main Logo Component
 */
export default () => {
  return (
    <h1>
      Botmation
      <VersionWrapper>v2.0.x</VersionWrapper>
    </h1>
  );
}