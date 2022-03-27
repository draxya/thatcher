import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { Head } from '@/components';
import { MainLayout } from '@/layouts';
import type { NextPageWithLayout } from '@/types';

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  height: 100%;
  style: -moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;
  unselectable: on
  onselectstart: return false;
  onmousedown: return false;
`;

const HomePage: NextPageWithLayout = () => {
  return (
    <Wrapper>
      <Head />
      <Image src="/thatcher.png" width={1000} height={384} draggable="false" />
    </Wrapper>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
