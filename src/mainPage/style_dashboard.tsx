import styled from '@emotion/styled';
import { STCOMGlassWrapper } from '../common/styles/commonStyleComs';
import { transformStyles } from '../common/styles/transformStyles';
export const MainContainer = styled.div`
  width: 100vw;
  max-width: 120rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 9.5rem 6.4rem 0;

  ${transformStyles}

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 375px;
    max-width: 480px;
    margin: 0;
    padding: 6.4rem 2.4rem 0;
  }
`;

export const Announcement = {
  GlassWrapper: styled(STCOMGlassWrapper)`
    position: relative;
    margin-top: 6.4rem;
    width: 100%;
    height: 21.8rem;
    overflow: hidden;
    z-index: -1;

    @media (${({ theme }) => theme.breakpoints.mobile}) {
      height: 16rem;
      border-radius: 12px;
    }
  `,
  Container: styled.div`
    padding: 4.5rem 3rem;
    @media (${({ theme }) => theme.breakpoints.mobile}) {
      padding: 2rem;
    }
  `,
  Background: styled.img`
    /* width: 48rem; */
    height: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;

    @media (${({ theme }) => theme.breakpoints.mobile}) {
      right: -10rem;
      opacity: 0.8;
    }
  `,
  Label: styled.div`
    width: fit-content;
    height: auto;
    padding: 0.9rem;
    border-radius: 93.75px;
    background-color: ${({ theme }) => theme.colors.qve_blue};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.caption};
    margin-bottom: 1.2rem;
  `,
  Text: styled.p`
    ${({ theme }) => theme.fonts.title_1};
    @media (${({ theme }) => theme.breakpoints.mobile}) {
      ${({ theme }) => theme.fonts.body_1};
    }
  `,
};

export const Dashboard = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 4.7rem;

    @media (${({ theme }) => theme.breakpoints.mobile}) {
      margin-top: 2.4rem;
    }
  `,
};
