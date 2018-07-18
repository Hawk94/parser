import styled, {injectGlobal, css} from 'styled-components'
import {media} from './style-utils'
// $FlowFixMe
import CircularStd from 'assets/fonts/CircularStd-Book.otf'
// $FlowFixMe
import CircularMedium from 'assets/fonts/CircularStd-Medium.otf'
// $FlowFixMe
import CircularBold from 'assets/fonts/CircularStd-Bold.otf'

export const theme = {
  white: '#fff',
  black: '#000',
  primary: '#29dc8d',
  primaryHint: 'rgba(47, 231, 150, 0.8)',
  primaryText: '#6e7b8c',
  secondary: '#e1e6ec',
  secondaryText: '#a2aebf',
  danger: '#ff4a4a',
  info: '#ddebf8',
  interest: '#f6ebd2',
  light: '#f4f4f4',
  lightText: '#9dabba',
  dark: '#9dabba',
  darkText: '#4a5665',
  darker: '#4a5665',
  transparent: 'transparent',
  borderRadius: '6px'
}

injectGlobal`

  @font-face {
    font-family: "CircularStd";
    src: url('${CircularStd}') format('opentype');
  }

  @font-face {
    font-family: "CircularStd Medium";
    src: url('${CircularMedium}') format('opentype');
  }

  @font-face {
    font-family: "CircularStd Bold";
    src: url('${CircularBold}') format('opentype');
  }

  * {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: "CircularStd", "Helvetica", "Arial", sans-serif;
  }

  h1 {
    font-family: "CircularStd Medium", "Helvetica", "Arial", sans-serif;
    font-weight: normal;
    font-size: 24px;
    margin: 0;
  }

  h2 {
    font-family: "CircularStd", "Helvetica", "Arial", sans-serif;
    font-weight: normal;
    font-size: 20px;
  }

  h3 {
    font-family: "CircularStd Medium", "Helvetica", "Arial", sans-serif;
    font-weight: normal;
    font-size: 18px;
  }

  button {
    border-style: none;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    user-select: none;
  }

  input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
      -moz-appearance: textfield;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 50px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.secondary};

  font-family: 'CircularStd Medium';
  font-size: 16px;

  &:first-child {
    border-radius: 3px 0 0 0;
  }

  &:last-child {
    border-radius: 0 3px 0 0;
  }

  ${props =>
    props.isActive &&
    css`
      background-color: #29dc8d;
    `};

  ${props =>
    props.narrow &&
    css`
      width: 50%;
    `};
`

export const Title = styled.h1`
  text-align: left;
  color: ${props => props.theme.darkText};
  margin-top: 50px;
  margin-bottom: 20px;

  ${props =>
    props.large &&
    css`
      font-size: 40px;
    `};

  ${props =>
    props.medium &&
    css`
      font-size: 32px;
      margin-top: 80px;
      margin-bottom: 20px;
    `};

  ${props =>
    props.noMargin &&
    css`
      margin: 0;
    `};

  ${props =>
    props.lessMargin &&
    css`
      margin-bottom: 20px;
    `};
`

export const Heading = styled.h2`
  color: ${props => props.theme.darkText};
`

export const SubHeading = styled.h3`
  margin-top: 30px;
  color: ${props => props.theme.darkText};

  ${props =>
    props.noMargin &&
    css`
      margin: 0 0 10px 0;
    `};
`

export const StyledP = styled.p`
  font-family: 'CircularStd';
  font-size: 16px;
  color: ${props => props.theme.primaryText};
  text-align: left;
  margin: 0;

  ${props =>
    props.moreMargin &&
    css`
      margin-top: 10px;
    `};

  ${props =>
    props.smaller &&
    css`
      font-size: 14px;
    `};

  ${props =>
    props.isCentered &&
    css`
      text-align: center;
    `};
`

export const Divider = styled.hr`
  height: 1px;
  border: none;
  background-color: ${props => props.theme.secondary};
  border-color: ${props => props.theme.secondary};

  ${props =>
    props.moreMargin &&
    css`
      margin: 30px 0;
    `};

  ${props =>
    props.lessMargin &&
    css`
      margin: 20px 0;
    `};
`

export const Flex = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 44px;

  ${media.tablet`
    display: flex;
  `};

  ${props =>
    props.noMargin &&
    css`
      margin: 0;
    `};
`

export const Placeholder = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  border: 1px solid ${props => props.theme.secondary}
  border-radius: ${props => props.theme.borderRadius};

  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, rgba(0, 0, 0, 0.05) 8%, rgba(0, 0, 0, 0.1) 18%, rgba(0, 0, 0, 0.05) 33%);

  @keyframes placeHolderShimmer{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
}
`
