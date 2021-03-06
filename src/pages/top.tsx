import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import Frame from '../common/frame'
import CustomFont from '../common/customfont'
import MyIcons, { MyIconProps } from '../components/links'
import { FontColor, FontSize, device, url } from '../utils/const'

interface State {
  isOpen: boolean
  isFirst: boolean
  iconIsFirst: boolean
  iconIsOpen: boolean
}
export default class Top extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = { isFirst: true, isOpen: false, iconIsFirst: true, iconIsOpen: false }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isOpen: true, isFirst: false })
    }, 500)
    setTimeout(() => {
      this.setState({ iconIsFirst: false, iconIsOpen: true })
    }, 2300)
  }
  render() {
    return (
      <Fragment>
        <TopWrapper>
          <Frame
            isMenuOpen={this.state.isOpen}
            isFirst={this.state.isFirst}
            time={1}
            fadeInFrame={fadeInFrame}
            fadeOutFrame={fadeOutFrame}
            bold={4}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '100%'
              }}
            >
              <CustomFont delay={1.6} animation={TitleFadeIn} textAlign="center" size={FontSize.title}>
                Welcome to My Website
              </CustomFont>
            </div>
          </Frame>
        </TopWrapper>
        <IconFrameWrapper>
          <Frame
            isMenuOpen={this.state.iconIsOpen}
            isFirst={this.state.iconIsFirst}
            time={0.8}
            fadeInFrame={IconFadeIn}
            bold={4}
          >
            <IconWrapper>
              <MyIcons icons={icon} />
            </IconWrapper>
          </Frame>
        </IconFrameWrapper>
      </Fragment>
    )
  }
}

const icon: MyIconProps[] = [
  { icon: ['fab', 'github'], color: FontColor.Light, size: '4x', url: url.github },
  { icon: ['fab', 'twitter'], color: FontColor.Light, size: '4x', url: url.twitter }
]
const TopWrapper = styled.div`
  position: absolute;
  top: 2%;
  height: 80%;
  margin: auto;
  @media ${device.mobileS} {
    left: 2.5%;
    width: 95%;
  }
  @media ${device.laptop} {
    left: 130px;
    width: calc(100% - 260px);
  }
`
const IconFrameWrapper = styled.div`
  position: absolute;
  bottom: 2%;
  height: 14%;
  @media ${device.mobileS} {
    left: 5%;
    width: 90%;
  }
  @media ${device.laptop} {
    left: 130px;
    width: calc(100% - 260px);
  }
`

const IconWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  left: 25%;
`
const fadeInFrame = keyframes`
    0% {
      width: 0;
      height: 0;
      right: 50%;
      top: 50%;
      opacity: 0;
    }
    50% {
      width: 80%;
      height: 1px;
      right: 10%;
      top: 50%;
      opacity: 1;
    }
    100% {
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
`

const fadeOutFrame = keyframes`
  0% {
      width: 100%;
      height: 100%;
    }
  50% {
    width: 80%;
    height: 1px;
    right: 10%;
    top: 50%;
    opacity: 1;
  }
  100% {
    width: 0;
    height: 0;
    right: 50%;
    top: 50%;
    opacity: 0;
  }
`
const TitleFadeIn = keyframes`
  0% {
    opacity: 0;
    transform:translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  } 
`
const IconFadeIn = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`
