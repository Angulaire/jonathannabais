import { Row, Col, Button } from 'antd';
import styled from 'styled-components';
import { variant } from 'styled-system';


const Section = styled('section')(
  variant({
    prop: 'color',
    variants: {
      primary: {
        color: 'primary.text',
        bg: 'primary.bg',
      },
      secondary: {
        color: 'secondary.text',
        bg: 'secondary.bg',
        'h2, h3': {
          color: 'black',
        }
      },
    },
  }),
  variant({
    prop: 'space',
    variants: {
      default: {
        padding: ['40px 20px', '80px 140px']
      },
      fullWidth: {

      },
      marginLeft: {
        padding: ['40px 20px', '80px 140px 80px 70px'],
        marginLeft: ['0', '70px']
      }
    }
  })
)

const ToolCard = styled.div`

`

type TextGridProps = {
  title: string;
  color: string;
  space: string;
}


const TextGrid = ({ title, color, space }: TextGridProps) => {

  return (
    <Section 
      color={color} 
      space={space}
    >
      <h2>{title}</h2>
      <Row justify="center" align="top">
        <Col xs={12} md={4}>
          <div data-aos="fade-up" data-aos-duration="1000">
            <ToolCard>
              <svg width="70px" height="59px" viewBox="0 0 70 59" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Index" transform="translate(-197.000000, -3327.000000)">
                  <g id="Outils" transform="translate(0.000000, 3011.000000)">
                    <rect id="Rectangle" fill="#06205C" x="0" y="0" width="1440" height="603"></rect>
                    <rect id="Rectangle" fill="#172D5F" x="147" y="266" width="170" height="158"></rect>
                    <g id="Group-6" transform="translate(197.000000, 309.000000)" fill-rule="nonzero">
                      <g id="airtable-seeklogo.com" transform="translate(0.000000, 7.000000)">
                          <path d="M31.2720515,0.739101557 L5.10569919,11.540868 C3.65058038,12.1416477 3.66565524,14.2036124 5.12989825,14.7826248 L31.4057414,25.1779348 C33.7145722,26.0913733 36.285626,26.0913733 38.5940601,25.1779348 L64.8703,14.7826248 C66.3341465,14.2036124 66.3496179,12.1416477 64.8941025,11.540868 L38.7281469,0.739101557 C36.3407683,-0.246367186 33.6590336,-0.246367186 31.2720515,0.739101557" id="Path" fill="#FFBF00"></path>
                          <path d="M37.0114943,31.0013151 L37.0114943,57.2317256 C37.0114943,58.4793649 38.2676632,59.3336443 39.4256379,58.8739245 L68.8863326,47.4217055 C69.5589239,47.1546682 70,46.5038651 70,45.7795066 L70,19.5490963 C70,18.3014569 68.7438311,17.4471776 67.5858564,17.9068974 L38.1251616,29.3591162 C37.4529697,29.6261535 37.0114943,30.2769569 37.0114943,31.0013151" id="Path" fill="#26B5F8"></path>
                          <path d="M30.4076969,32.3120288 L21.761961,36.5598788 L20.8841252,36.9916524 L2.63350753,45.8902072 C1.47661146,46.4581401 0,45.6002158 0,44.2924436 L0,19.5564296 C0,19.083286 0.238405058,18.674808 0.558120451,18.3671441 C0.691532551,18.2309848 0.842706622,18.1189244 0.999801343,18.0301598 C1.43595629,17.7638659 2.05801982,17.6927739 2.5869317,17.9056483 L30.2624434,29.0638856 C31.6691911,29.6318188 31.7797101,31.6376586 30.4076969,32.3120288" id="Path" fill="#ED3049"></path>
                          <path d="M30.4154669,32.1649948 L21.838871,36.369863 L0.804597701,18.3612114 C0.936942904,18.2264298 1.08690803,18.1155033 1.24274647,18.0276369 C1.67541348,17.7640375 2.29250237,17.6936648 2.81718454,17.9043853 L30.2713749,28.949718 C31.6668729,29.5119046 31.7765081,31.4974482 30.4154669,32.1649948" id="Path" fill-opacity="0.25" fill="#000000"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p>Airtable</p>
            </ToolCard>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div data-aos="fade-up" data-aos-duration="1000">
            <ToolCard>
              <svg width="62px" height="58px" viewBox="0 0 62 58" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="50%" cy="54.6521962%" fx="50%" fy="54.6521962%" r="71.6330472%" gradientTransform="translate(0.500000,0.546522),scale(0.925039,1.000000),translate(-0.500000,-0.546522)" id="radialGradient-1">
                      <stop stop-color="#FFB900" offset="0%"></stop>
                      <stop stop-color="#F95D8F" offset="60%"></stop>
                      <stop stop-color="#F95353" offset="99.91%"></stop>
                  </radialGradient>
                </defs>
                <g id="Index" transform="translate(-245.000000, -4367.000000)">
                  <g id="Group-16" transform="translate(0.000000, 4182.000000)">
                    <rect id="Rectangle" fill="#06205C" x="0" y="0" width="375" height="848"></rect>
                    <g id="Group-11" transform="translate(201.000000, 144.000000)">
                      <rect id="Rectangle" fill="#172D5F" x="0" y="0" width="150" height="139.411765"></rect>
                      <g id="6774712151536126573" transform="translate(44.117647, 41.470588)" fill="url(#radialGradient-1)" fill-rule="nonzero">
                        <path d="M48.2226617,30.1789958 C40.8201037,30.1789958 34.8202044,36.1838897 34.8202044,43.5916243 C34.8202044,50.9998244 40.8201037,57.0051837 48.2226617,57.0051837 C55.6242893,57.0051837 61.6246535,50.9998244 61.6246535,43.5916243 C61.6246535,36.1838897 55.6242893,30.1789958 48.2226617,30.1789958 L48.2226617,30.1789958 Z M13.4022242,30.1799267 C6.00059693,30.1799267 0,36.1838897 0,43.5923225 C0,50.9998244 6.00059693,57.0051837 13.4022242,57.0051837 C20.8043173,57.0051837 26.8051469,50.9998244 26.8051469,43.5923225 C26.8051469,36.1838897 20.8043173,30.1799267 13.4022242,30.1799267 L13.4022242,30.1799267 Z M44.2142023,13.4126285 C44.2142023,20.8203631 38.214303,26.8266532 30.8126753,26.8266532 C23.4103505,26.8266532 17.4102187,20.8203631 17.4102187,13.4126285 C17.4102187,6.00535929 23.4103505,0 30.8126753,0 C38.214303,0 44.2142023,6.00535929 44.2142023,13.4126285 L44.2142023,13.4126285 Z" id="Shape"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p>Asana</p>
            </ToolCard>
          </div>
        </Col>
      </Row>
    </Section>
  )
}

export default TextGrid