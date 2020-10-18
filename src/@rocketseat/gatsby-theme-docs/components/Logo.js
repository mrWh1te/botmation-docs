import React from 'react';
import styled from '@emotion/styled';

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
      <VersionWrapper>v3</VersionWrapper>
    </h1>
  );
}