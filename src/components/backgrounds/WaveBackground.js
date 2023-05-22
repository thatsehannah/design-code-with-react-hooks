import React from "react"
import styled from "styled-components"

const WaveBackground = () => {
  return (
    <Wrapper>
      <Background />
      <Wave
        src="/images/waves/hero-wave1.svg"
        style={{ top: "100px", filter: "blur(50px)" }}
      />
      <Wave src="/images/waves/hero-wave2.svg" style={{ top: "350px" }} />
      <BottomWave src="/images/waves/hero-wave3.svg" style={{ top: "550px" }} />
    </Wrapper>
  )
}

export default WaveBackground

const Wrapper = styled.div`
  position: relative;
`
const Background = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9876e7 100%);
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`

const Wave = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;
`

const BottomWave = styled(Wave)`
  @media (prefers-color-scheme: dark) {
    content: url("images/waves/hero-wave3-dark.svg");
  }
`
